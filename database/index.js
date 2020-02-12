const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airbnbReviews', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected to airbnb DB!");
})

var reviewSchema = new mongoose.Schema(
  {
    accommodationId: { type: Number, required: true },
    scores: {
      accuracy: { type: mongoose.Types.Decimal128 },
      communication: { type: mongoose.Types.Decimal128 },
      cleanliness: { type: mongoose.Types.Decimal128 },
      checkIn: { type: mongoose.Types.Decimal128 },
      value: { type: mongoose.Types.Decimal128 },
      location: { type: mongoose.Types.Decimal128 },
      outstandingHospitality: Boolean,
      quickResponses: Boolean,
      stylishSpace: Boolean,
      sparklingClean: Boolean,
      amazingAmenities: Boolean
    },
    reviewAuthorDetails: {
      name: String,
      userPicture: String,
      userPageLink: String,
      date: Date,
      reviewText: String
    }
  }
);

const Review = mongoose.model('Review', reviewSchema);

const getAllReviewsForSpecificHouse = function (callback, houseId) {
  Review.find({ "accommodationId": houseId }, function (err, reviews) {
    if (err) {
      console.log(err);
    } else {
      console.log(reviews);
      callback(reviews);
    }
  });
};

const insertData = function (callback, houseId) {
  Review.insertMany(
    {
    accommodationId: 1001,
    scores: {
      accuracy: 3.6,
      communication: 3.5,
      cleanliness: 4.5,
      checkIn: 3.0,
      value: 4.5,
      location: 3.1,
      outstandingHospitality: true,
      quickResponses: true,
      stylishSpace: true,
      sparklingClean: true,
      amazingAmenities:true
    },
    reviewAuthorDetails: {
      name: 'Noel Mendoza',
      userPicture: 'https://airbnb-reviews-users-pictures.s3-us-west-1.amazonaws.com/1986.jpg',
      userPageLink: 'http://burnice.com',
      date: '2020-02-11T12:18:53.109Z',
      reviewText: 'I would never stay in this shit hole again!'
    }
  }, function (err, review) {
    if (err) {
      console.log(err);
    } else {
      console.log(review)
      callback('Posted to DB successfully');
    }
  }

  )
}

module.exports = {
  Review,
  getAllReviewsForSpecificHouse,
  insertData
};
