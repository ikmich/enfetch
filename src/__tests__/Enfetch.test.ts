import { Enfetch } from "../lib/Enfetch";
import * as faker from "faker";

const baseUri = "https://jsonplaceholder.typicode.com";
let enf: Enfetch;

let context: any = {
  postId: 1,
};

describe("HTTP calls", () => {
  beforeEach(() => {
    enf = new Enfetch({
      baseUri,
    });
  });

  it(`works with 'addHeaders'`, async (done) => {
    enf.addHeaders({
      Authorization: "Test Token",
    });
    const res = await enf.get(`/posts/${context.postId}`, {
      async responseHandler(response) {
        if (response.status >= 400) {
          throw new Error(
            `[addHeaders] ${response.statusText} - ${await response.text()}`
          );
        }
      },
    });
    const resBody = await enf.json(res);
    expect(resBody).toBeDefined();
    expect(typeof resBody).toBe("object");
    done();
  });

  it("makes GET request", async (done) => {
    const res = await enf.get(`/posts/${context.postId}`);
    const resBody = await enf.json(res);
    expect(resBody).toBeDefined();
    expect(typeof resBody).toBe("object");
    done();
  });

  it("makes POST request", async (done) => {
    const body = {
      userId: 1,
      title: faker.lorem.words(5),
      body: faker.lorem.sentence(),
    };

    const res = await enf.post("/posts/", {
      jsonBody: body,
    });

    const resBody = await enf.json(res);
    expect(resBody).toBeDefined();
    expect(typeof resBody).toBe("object");
    expect(resBody).toHaveProperty("id");
    context.postId = resBody.id;
    done();
  });

  it("makes PATCH request", async (done) => {
    const body = {
      title: faker.lorem.words(6),
      body: faker.lorem.sentence(),
    };

    const res = await enf.patch(`/posts/${context.postId}`, {
      jsonBody: body,
      async responseHandler(response) {
        if (response.status >= 400) {
          throw new Error(
            `[PATCH] ${response.statusText} - ${await response.text()}`
          );
        }
      },
    });

    const resBody = await enf.json(res);
    expect(resBody).toBeDefined();
    expect(typeof resBody).toBe("object");
    done();
  });

  it("makes DELETE request", async (done) => {
    const res = await enf.del(`/posts/${context.postId}`, {
      async responseHandler(response) {
        if (response.status >= 400) {
          throw new Error(
            `[DELETE] ${response.statusText} - ${await response.text()}`
          );
        }
      },
    });

    const resBody = await enf.json(res);
    expect(resBody).toBeDefined();
    expect(typeof resBody).toBe("object");
    done();
  });
});
