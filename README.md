# reviews
Mock for reviews component at airbnb website using react and css

# API Routes

// GETS reviews from random record
app.get('/v1/api/:accommodationId/reviews', (req, res) => {
  dbReviewModel.getAllReviewsForSpecificHouse((reviews) => {
    res.send(reviews);
  },
  req.params.accommodationId
  );
});

// POSTS new record at ID: 10000
app.post('/v1/api/10000/reviews', (req, res) => {
  dbReviewModel.insertData ((reviews) => {
    res.send('Successfully posted record!');
  });
});

// UPDATES name in record at ID: 10000
app.put('/v1/api/10000/reviews', (req, res) => {
  dbReviewModel.updateData ((review) => {
    res.send('Successfully updated record!')
  })
});

// DELETES record at ID: 10000
app.delete('/v1/api/10000/reviews', (req, res) => {
  dbReviewModel.deleteData ((review) => {
    res.send('Successfully deleted record!')
  })
});