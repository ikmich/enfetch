# Utility class to make HTTP requests with the fetch api

# Usage
```javascript
// Instantiate object
const fc = new FetchClient({
  baseUri: 'http://example.api',
  headers: {
    'Authorization': '<token>'
  }
});

// GET request
const response = await fc.get('/comments');
const respBody = fc.json(response);

const raw = await fc.post('/comments/', {
  jsonBody: {
    text: 'My first comment',
    author: 'Johnny Brass'
  }
});

const raw = await fc.put('/comments/45', {
  text: 'My original comment'
});

//const response = await 
```

```javascript

```
