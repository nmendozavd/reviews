const express = require('express');
const dbReviewModel = require('../database/index.js');
const app = express();
const port = 2020;

app.get('/', (req, res) => res.send('Hi there, this is the main endpoint\n'));

app.get(
  '/v1/api/:accommodationId/reviews',
  (req, res) => {
    dbReviewModel.getAllReviewsForSpecificHouse(
      (reviews) => {
        res.send(reviews)
      },
      req.params.accommodationId
    );
  }
)

app.listen(port, () => console.log(`Reviews server is listening on port ${port}!\n`))