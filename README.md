# Utility class to make HTTP requests with the fetch api

# Usage

```javascript
// Instantiate object
const ef = new Enfetch({
  baseUri: "http://example.api",
  headers: {
    Authorization: "<token>",
  },
});
```

```javascript
// Sample GET request
const ef: Enfetch = new Enfetch(/*{opts}*/);
const res = await ef.get("/comments");
const resBody = await ef.json(res);
console.log(resBody);
```

```javascript
// Sample POST request
const ef: Enfetch = new Enfetch(/*{opts}*/);
const res = await ef.post("/comments", {
  jsonBody: {
    text: "My first comment",
    author: "Johnny Brass",
  },
  async responseHandler(response) {
    if (response.status >= 400) {
      throw new Error(response.statusText + " - " + (await response.text()));
    }
  },
});

const resBody = await ef.json(res);
console.log(resBody);
```

```javascript
// Wrap in Promise...
function sendRequest(): Promise<any> {
  return new Promise((resolve, reject) => {
    const ef: Enfetch = new Enfetch(/*{opts}*/);
    ef.post("/comments", {
      jsonBody: { text: "My next comment" },
      async responseHandler(res) {
        if (res.status >= 400) {
          return reject(new Error(res.statusText + "::" + (await res.text())));
        }
      },
    })
      .then((res: Response) => {
        return ef.json(res);
      })
      .then((resBody: any) => {
        return resolve(resBody);
      });
  });
}
```
