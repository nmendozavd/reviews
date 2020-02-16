const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const dbListingModel = require('./index.js');


const csvWriter = createCsvWriter({
  path: '/Users/noelmendoza/Desktop/file.csv',
  header: [
    { id: 'listing_id', title: 'listing_id' },
    { id: 'ratingOverall', title: 'ratingOverall' },
    { id: 'ratingCommunication', title: 'ratingCommunication' },
    { id: 'ratingCheckIn', title: 'ratingCheckIn' },
    { id: 'ratingCleanliness', title: 'ratingCleanliness' },
    { id: 'ratingAccuracy', title: 'ratingAccuracy' },
    { id: 'ratingLocation', title: 'ratingLocation' },
    { id: 'ratingValue', title: 'ratingValue' },
    { id: 'host', title: 'host.host_id'},
    { id: 'reviews', title: 'reviews.review_id' }
  ]
});

// Reviews array for each listing
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

// arr for listings 
var listingsArr = [];
// data size 
const data_size = 10;
// listing and reviews of listing 
for (let j = 0; j < data_size; j++) {
  listingsArr.push({
    listing_id: j,
    ratingOverall: faker.finance.amount(1,5,1),
    ratingCommunication: faker.finance.amount(1,5,1),
    ratingCheckIn: faker.finance.amount(1,5,1),
    ratingCleanliness: faker.finance.amount(1,5,1),
    ratingAccuracy: faker.finance.amount(1,5,1),
    ratingLocation: faker.finance.amount(1,5,1),
    ratingValue: faker.finance.amount(1,5,1),
    host: {
      host_id: j,
      hostPhoto: `https://airbnb-reviews-users-pictures.s3-us-west-1.amazonaws.com/${Math.ceil(Math.random() * 3000)}.jpg`
    },
    reviews: reviewsArr,
  });
  
  // const listingEntry = new dbListingModel.Listing(listings);


  csvWriter.writeRecords(listingsArr)       // returns a promise
    .then(() => {
      console.log('....done');
    });

  


  // listingEntry.save((err, listing) => {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     console.log(`Listing #${listingEntry.listing_id} has been saved to the DB!.`);
  //   }
  // })


};

