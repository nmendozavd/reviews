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
GET '/v2/api/listing/:id' - Read listing info for one listing id
* request body is empty
* returns an object with 2 nested objects and 1 nested array that includes listing information and reviews:
```javascript
{
  id: (integer),
  scores: {
    accuracy: (decimal),
    communication: (decimal),
    cleanliness: (decimal),
    checkIn: (decimal),
    value: (decimal),
    location: (decimal),
  },
  reviewDetails: [{
    name: (string),
    userPicture: (string),
    userPageLink: (string),
    date: (date),
    reviewText: (string)
  }]
}
```

POST '/v2/api/listing/:id/reviews - Create new review for current listing
* request body:
```javascript
reviewDetails: [{
  name: (string),
  userPicture: (string),
  userPageLink: (string),
  date: (date),
  reviewText: (string)
}]
```
* returns completed status code

PUT'/v2/api/listing/:id/reviews' - Updates review for a current listing
* request body:
```javascript
reviewDetails: [{
  reviewText: (string)
}]
```
* returns completed status code

DELETE '/api/listing/:id/reviews' - Delete a particular review
* request body is empty
* returns completed status code