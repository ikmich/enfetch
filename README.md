# Utility class to make HTTP requests with the fetch api

# Usage

```javascript
// Instantiate object
const fc = new FetchClient({
  baseUri: "http://example.api",
  headers: {
    Authorization: "<token>",
  },
});

// Sample GET request
res = await fc.get("/comments");
const resBody = fc.json(res);
console.log(resBody);

// Sample POST request
const raw = await fc.post("/comments/", {
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
console.log(resBody);
```
