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

module.exports = {
  Review,
  getAllReviewsForSpecificHouse
};
