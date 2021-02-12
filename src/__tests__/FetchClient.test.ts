import { FetchClient } from "../lib/FetchClient";
import * as faker from "faker";

const baseUri = "https://jsonplaceholder.typicode.com";
let fc: FetchClient;

let context: any = {
  postId: 1,
};

describe("HTTP calls", () => {
  beforeEach(() => {
    fc = new FetchClient({
      baseUri,
    });
  });

  it("makes GET request", async (done) => {
    const res = await fc.get(`/posts/${context.postId}`);
    const resBody = await fc.json(res);
    expect(resBody).toBeDefined();
    expect(typeof resBody).toBe("object");
    done();
  });

  it(`works with 'addHeaders'`, async (done) => {
    fc.addHeaders({
      Authorization: "Test Token",
    });
    const res = await fc.get(`/posts/${context.postId}`, {
      async responseHandler(response) {
        if (response.status >= 400) {
          throw new Error(
            `[addHeaders] ${response.statusText} - ${await response.text()}`
          );
        }
      },
    });
    const resBody = await fc.json(res);
    expect(resBody).toBeDefined();
    expect(typeof resBody).toBe('object');
    done();
  });

  it("makes POST request", async (done) => {
    const body = {
      userId: 1,
      title: faker.lorem.words(5),
      body: faker.lorem.sentence(),
    };

    const res = await fc.post("/posts/", {
      jsonBody: body,
    });

    const resBody = await fc.json(res);
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

    const res = await fc.patch(`/posts/${context.postId}`, {
      jsonBody: body,
      async responseHandler(response) {
        if (response.status >= 400) {
          throw new Error(
            `[PATCH] ${response.statusText} - ${await response.text()}`
          );
        }
      },
    });

    const resBody = await fc.json(res);
    expect(resBody).toBeDefined();
    expect(typeof resBody).toBe("object");
    done();
  });

  it("makes DELETE request", async (done) => {
    const res = await fc.del(`/posts/${context.postId}`, {
      async responseHandler(response) {
        if (response.status >= 400) {
          throw new Error(
            `[DELETE] ${response.statusText} - ${await response.text()}`
          );
        }
      },
    });

    const resBody = await fc.json(res);
    expect(resBody).toBeDefined();
    expect(typeof resBody).toBe("object");
    done();
  });
});
