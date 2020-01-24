const mongoose = require('mongoose');
var faker = require('faker');

mongoose.connect('mongodb://localhost/airbnbReviews', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected to airbnb DB!");
})

var reviewSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, required: true },
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

const FAKE_DATA_SIZE = 100;
const fakeReviewsArray = [];

for (let i = 0; i < FAKE_DATA_SIZE; i++) {
  const review = {
    _id: mongoose.Types.ObjectId(),
    scores: {
      accuracy: Math.round(((Math.random() * 5) + Number.EPSILON + 0.1) * 10) / 10,
      communication: Math.round(((Math.random() * 5) + Number.EPSILON + 0.1) * 10) / 10,
      cleanliness: Math.round(((Math.random() * 5) + Number.EPSILON + 0.1) * 10) / 10,
      checkIn: Math.round(((Math.random() * 5) + Number.EPSILON + 0.1) * 10) / 10,
      value: Math.round(((Math.random() * 5) + Number.EPSILON + 0.1) * 10) / 10,
      location: Math.round(((Math.random() * 5) + Number.EPSILON + 0.1) * 10) / 10,
      outstandingHospitality: Math.random() > 0.5,
      quickResponses: Math.random() > 0.5,
      stylishSpace: Math.random() > 0.5,
      sparklingClean: Math.random() > 0.5,
      amazingAmenities: Math.random() > 0.5
    },
    reviewAuthorDetails: {
      name: faker.name.findName(),
      userPicture: faker.image.avatar(),
      userPageLink: faker.internet.url(),
      date: faker.date.recent(),
      reviewText: faker.lorem.paragraphs()
    }
  };
  fakeReviewsArray.push(review);
  // console.log(`${i}. `);
  // console.log(review);
  // console.log('-----------------------------------------------');
  // console.log();

  // const reviewEntry = new Review(review);
  const reviewEntry = new Review(review);

  reviewEntry.save((err, review) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`${reviewEntry._id} has been saved to the db.`);
    }
  });
}

