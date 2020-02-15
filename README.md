# Reviews
Mock for reviews component at airbnb website using react and css

## API Legacy Routes

GET '/v1/api/:accommodationId/reviews' - Reads reviews from a random listing

POST '/v1/api/10000/reviews' - Creates a new listing at ID 10000

PUT '/v1/api/10000/reviews' - Updates name in record at ID: 10000

DELETE '/v1/api/10000/reviews' - Deletes listing at ID: 10000


## API Routes 
GET '/v2/api/listing/:id' - Read listing info for one listing id
* request body is empty
* returns an object with 1 nested object and 1 nested array that includes listing information and reviews:
```javascript
listing: {
    listing_id: (Number),
    ratingOverall: (Number),
    ratingCommunication: (Number),
    ratingCheckIn: (Number),
    ratingCleanliness: (Number),
    ratingAccuracy: (Number),
    ratingLocation: (Number),
    ratingValue: (Number),
    host: {
      host_id: (Number),
      hostPhoto: (String)
    }
  },
  reviews: [{
    review_id: (Number),
    reviewerName: (String),
    reviewerPhoto: (String),
    reviewerLink: (String),
    date: (Date),
    reviewerComment: (String),
    scores: {
      accuracy: (Number),
      communication: (Number),
      cleanliness: (Number),
      checkIn: (Number),
      value: (Number),
      location: (Number)
    },
  }]
});
```

POST '/v2/api/listing/:id/reviews - Create new review for current listing
* request body:
```javascript
 reviews: [{
    review_id: (Number),
    reviewerName: (String),
    reviewerPhoto: (String),
    reviewerLink: (String),
    date: (Date),
    reviewerComment: (String),
    scores: {
      accuracy: (Number),
      communication: (Number),
      cleanliness: (Number),
      checkIn: (Number),
      value: (Number),
      location: (Number)
    },
  }]
});
```
* returns completed status code

PUT'/v2/api/listing/:id/reviews' - Updates review for a current listing
* request body:
```javascript
reviews: [{
    review_id: (Number),
    reviewerName: (String),
    reviewerPhoto: (String),
    reviewerLink: (String),
    date: (Date),
    reviewerComment: (String),
    scores: {
      accuracy: (Number),
      communication: (Number),
      cleanliness: (Number),
      checkIn: (Number),
      value: (Number),
      location: (Number)
    },
  }]
});
```
* returns completed status code

DELETE '/api/listing/:id/reviews/:id' - Delete a particular review
* request body is empty
* returns completed status code