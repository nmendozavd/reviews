const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 2020;

app.get('/', (req, res) => res.send('Hi there, this is the main endpoint\n'));

app.get(
  '/v1/api/:accommodationId/reviews',
  (req, res) => {
    mongoose.connect('mongodb://localhost/airbnbReviews', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log("we're connected to airbnb DB!");
    })

    res.send(`Hi, you've reached /v1/api/${req.params.accommodationId}/reviews endpoint\n`);
    // Get all reviews for a specific house sorted by date
    db.Reviews.find({"accommodationId" : req.params.accommodationId}).sort({"reviewAuthorDetails.date": -1}).limit(7).pretty()

    // Route path: /users/:userId/books/:bookId
    // Request URL: http://localhost:3000/users/34/books/8989
    // req.params: { "userId": "34", "bookId": "8989" }
  }
)

app.listen(port, () => console.log(`Reviews server is listening on port ${port}!\n`))