const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnbReviews', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected to airbnb DB!");
})

var reviewSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Types.ObjectId, required: true, },
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

const review1 = new Review({
  _id: mongoose.Types.ObjectId()
});

review1.save((err, review) => { 
  if (err) {
    console.log(err);
  } else {
    console.log(review);
  }
});
