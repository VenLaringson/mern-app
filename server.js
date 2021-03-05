const express = require('express');
const app = express();

const cors = require('cors')

app.use(cors())

let posts = [
  {
      "id": 1,
      "title": "First Post",
      "content": "Hello World"
  },
  {
    "id": 2,
    "title": "Second Post",
    "content": "Bad Apple"
  },
  {
    "id": 3,
    "title": "Third Post",
    "content": "Hello Universe"
  }
];


app.get('/api/posts', (request, response) => {
  response.json(posts)
});

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});