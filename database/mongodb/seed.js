const faker = require('faker');
const fs = require('fs');
// const { Parser, transform: { unwind } } = require('json2csv');
const { Parser } = require('json2csv');


let reviewsArr = [];

for (let i = 0; i < 5; i++) {
  reviewsArr.push({
    review_id: i,
    reviewerName: faker.name.findName(),
    reviewerPhoto: `https://airbnb-reviews-users-pictures.s3-us-west-1.amazonaws.com/${Math.ceil(Math.random() * 3000)}.jpg`,
    reviewerLink: faker.internet.url(),
    date: faker.date.recent(),
    reviewerComment: faker.lorem.paragraphs(),
    scores: {
      accuracy: faker.finance.amount(1, 5, 1),
      communication: faker.finance.amount(1, 5, 1),
      cleanliness: faker.finance.amount(1, 5, 1),
      checkIn: faker.finance.amount(1, 5, 1),
      value: faker.finance.amount(1, 5, 1),
      location: faker.finance.amount(1, 5, 1),
    },
  })
}

var listings = [];

const data_size = 1000;

for (let j = 0; j < data_size; j++) {
  listings.push(
  {
    listing_id: j,
    ratingOverall: faker.finance.amount(1, 5, 1),
    ratingCommunication: faker.finance.amount(1, 5, 1),
    ratingCheckIn: faker.finance.amount(1, 5, 1),
    ratingCleanliness: faker.finance.amount(1, 5, 1),
    ratingAccuracy: faker.finance.amount(1, 5, 1),
    ratingLocation: faker.finance.amount(1, 5, 1),
    ratingValue: faker.finance.amount(1, 5, 1),
    host: {
      host_id: j,
      hostName: faker.name.findName(),
      hostPhoto: `https://airbnb-reviews-users-pictures.s3-us-west-1.amazonaws.com/${Math.ceil(Math.random() * 3000)}.jpg`
    },
    reviews: reviewsArr,
  });
};

const fields = ['listing_id', 'ratingOverall', 'ratingCommunication', 'ratingCheckIn', 'ratingCleanliness', 'ratingAccuracy', 'ratingLocation', 'ratingValue', 'host.host_id', 'host.hostName', 'host.hostPhoto', 'reviews.review_id', 'reviews.reviewerName', 'reviews.reviewerPhoto', 'reviews.reviewerLink', 'reviews.date', 'reviews.reviewerComment', 'reviews.scores.accuracy', 'reviews.scores.communication', 'reviews.scores.cleanliness', 'reviews.scores.checkIn', 'reviews.scores.value', 'reviews.scores.location'];
// const json2csvParser = new Parser({ transforms: [unwind('reviews')] });

// const json2csvParser = new Parser({ fields });
const json2csvParser = new Parser({ fields, unwind: ['reviews', 'reviews.scores'], unwindBlank: true });
const csv = json2csvParser.parse(listings);


fs.writeFile('../../csv/mongo.csv', csv, function (err) {
  if (err) throw err;
  console.log('...done');
});
    

//   // const listingEntry = new dbListingModel.Listing(listings);


  // listingEntry.save((err, listing) => {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     console.log(`Listing #${listingEntry.listing_id} has been saved to the DB!.`);
  //   }
  // })


// };

