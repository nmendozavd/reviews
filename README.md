# Reviews
Mock for reviews component at airbnb website using react and css

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

POST '/v2/api/listing/:id/reviews/:id - Create new review for current listing
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

PUT'/v2/api/listing/:id/reviews/:id' - Updates review for a current listing
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