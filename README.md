# reviews
Mock for reviews component at airbnb website using react and css

## API LEGACY Routes

GETS reviews from random record
app.get('/v1/api/:accommodationId/reviews', (req, res) => {
  dbReviewModel.getAllReviewsForSpecificHouse((reviews) => {
    res.send(reviews);
  },
  req.params.accommodationId
  );
});

POSTS new record at ID: 10000
app.post('/v1/api/10000/reviews', (req, res) => {
  dbReviewModel.insertData ((reviews) => {
    res.send('Successfully posted record!');
  });
});

UPDATES name in record at ID: 10000
app.put('/v1/api/10000/reviews', (req, res) => {
  dbReviewModel.updateData ((review) => {
    res.send('Successfully updated record!')
  })
});

DELETES record at ID: 10000
app.delete('/v1/api/10000/reviews', (req, res) => {
  dbReviewModel.deleteData ((review) => {
    res.send('Successfully deleted record!')
  })
});

## API Routes 
GET '/vi/api/listing/:id' - Read listing info for one listing id
* request body is empty
* returns an object with 2 nested objects and 1 nested array that includes listing information and reviews:
```{
    id: { type: Number, required: true },
    scores: {
      accuracy: { type: Decimal },
      communication: { type: Decimal },
      cleanliness: { type: Decimal },
      checkIn: { type: Decimal },
      value: { type: Decimal },
      location: { type: Decimal },git
    },
    reviewDetails: [{
      name: String,
      userPicture: String,
      userPageLink: String,
      date: Date,
      reviewText: String
    }]
  }```


app.get('/v1/api/specficy/:accommodationId/reviews', (req, res) => {
  dbReviewModel.getAllReviewsForSpecificHouse((reviews) => {
    res.send(reviews);
  },
  req.params.accommodationId
  );
});

POSTS new record at ID: 10000
app.post('/v1/api/specif/10000/reviews', (req, res) => {
  dbReviewModel.insertData ((reviews) => {
    res.send('Successfully posted record!');
  });
});

UPDATES name in record at ID: 10000
app.put('/v1/api/10000/reviews', (req, res) => {
  dbReviewModel.updateData ((review) => {
    res.send('Successfully updated record!')
  })
});

DELETES record at ID: 10000
app.delete('/v1/api/10000/reviews', (req, res) => {
  dbReviewModel.deleteData ((review) => {
    res.send('Successfully deleted record!')
  })
});