var faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Writing table to CSV file
const csvWriter = createCsvWriter({
  header: [
    { id: 'listingTitle', title: 'listingTitle' },
    { id: 'ratingOverall', title: 'ratingOverall' },
    { id: 'ratingCommunication', title: 'ratingCommunication' },
    { id: 'ratingCheck_in', title: 'ratingCheck_in' },
    { id: 'ratingCleanliness', title: 'ratingCleanliness' },
    { id: 'ratingAccuracy', title: 'ratingAccuracy' },
    { id: 'ratingLocation', title: 'ratingLocation' },
    { id: 'ratingValue', title: 'ratingValue' },
    { id: 'host', title: 'host' },
  ],
  path: '/Users/noelmendoza/Documents/Noel Mendoza/Coding/Hack Reactor/senior_section/system_design_capstone/reviews/csv/listings.csv'
});

var listingArr = [];
// data size 
const data_size = 1000;
// listing and reviews of listing 
for (let j = 0; j < data_size; j++) {
  listingArr.push({
    listingTitle: faker.address.streetAddress(),
    ratingOverall: faker.finance.amount(1, 5, 1),
    ratingCommunication: faker.finance.amount(1, 5, 1),
    ratingCheck_in: faker.finance.amount(1, 5, 1),
    ratingCleanliness: faker.finance.amount(1, 5, 1),
    ratingAccuracy: faker.finance.amount(1, 5, 1),
    ratingLocation: faker.finance.amount(1, 5, 1),
    ratingValue: faker.finance.amount(1, 5, 1),
    host: faker.random.number({ min: 1, max: 20 }),
  });

  csvWriter.writeRecords(listingArr)       // returns a promise
    .then(() => {
      console.log('...Done');
    });
}

// const createListing = () => ({
//   listingTitle: faker.address.streetAddress(),
//   ratingOverall: faker.finance.amount(1, 5, 1),
//   ratingCommunication: faker.finance.amount(1, 5, 1),
//   ratingCheck_in: faker.finance.amount(1, 5, 1),
//   ratingCleanliness: faker.finance.amount(1, 5, 1),
//   ratingAccuracy: faker.finance.amount(1, 5, 1),
//   ratingLocation: faker.finance.amount(1, 5, 1),
//   ratingValue: faker.finance.amount(1, 5, 1),
//   host: faker.random.number({ min: 1, max: 20 }),
// })

// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   const fakeListing = [];
//   const desiredFakeListing = 20;
//   for (let i = 0; i < desiredFakeListing; i++) {
//     fakeListing.push(createListing());
//   }
//   return knex('listing').insert(fakeListing);
// };