const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // Simulate a database error
        throw new Error('Database error!');
      } else {
        res.send('Hello World!');
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('An unexpected error occurred.');
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});