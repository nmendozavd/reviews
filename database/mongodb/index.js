const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SDC', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Ay dawg, we\'re connected to MongoDB');
})

var listingSchema = new mongoose.Schema(
  {
    listing_id: { type: Number, required: true },
    ratingOverall: { type: mongoose.Types.Decimal128 },
    ratingCommunication: { type: mongoose.Types.Decimal128 },
    ratingCheckIn: { type: mongoose.Types.Decimal128 },
    ratingCleanliness: { type: mongoose.Types.Decimal128 },
    ratingAccuracy: { type: mongoose.Types.Decimal128 },
    ratingLocation: { type: mongoose.Types.Decimal128 },
    ratingValue: { type: mongoose.Types.Decimal128 },
    host: {
      host_id: {type: Number },
      hostPhoto: String,
    },
  reviews: [{
    review_id: { type: Number },
    reviewerName: String,
    reviewerPhoto: String,
    reviewerLink: String,
    date: Date,
    reviewerComment: String,
    scores: {
      accuracy: { type: mongoose.Types.Decimal128 },
      communication: { type: mongoose.Types.Decimal128 },
      cleanliness: { type: mongoose.Types.Decimal128 },
      checkIn: { type: mongoose.Types.Decimal128 },
      value: { type: mongoose.Types.Decimal128 },
      location: { type: mongoose.Types.Decimal128 },
    },
  }]
});

const Listing = mongoose.model('Listing', listingSchema);

// CRUD operations

module.exports = { Listing };