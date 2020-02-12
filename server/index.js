const express = require('express');
const dbReviewModel = require('../database/index.js');
const app = express();
const port = 2020;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

//CRUD Operations

app.get('/v1/api/:accommodationId/reviews', (req, res) => {
  dbReviewModel.getAllReviewsForSpecificHouse((reviews) => {
    res.send(reviews);
  },
  req.params.accommodationId
  );
});

app.post('/v1/api/1001/reviews', (req, res) => {
  dbReviewModel.insertData ((reviews) => {
    res.send('Successfully Posted to DB');
    
  },
  // req.params.accommodationId
  );
});


// app.put('/', (req, res) => {

// });


// app.delete('/', (req, res) => {

// });



app.listen(port, () => console.log(`Reviews server is listening on port ${port}!\n`))