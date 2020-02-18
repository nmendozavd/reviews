var faker = require('faker');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Writing table to CSV file
const csvWriter = createCsvWriter({
  header: [
    { id: 'date', title: 'date' },
    { id: 'comment', title: 'comment' },
    { id: 'ratingOverall', title: 'ratingOverall' },
    { id: 'ratingCommunication', title: 'ratingCommunication' },
    { id: 'ratingCheck_in', title: 'ratingCheck_in' },
    { id: 'ratingCleanliness', title: 'ratingCleanliness' },
    { id: 'ratingAccuracy', title: 'ratingAccuracy' },
    { id: 'ratingLocation', title: 'ratingLocation' },
    { id: 'ratingValue', title: 'ratingValue' }
  ],
  path: '/Users/noelmendoza/Documents/Noel Mendoza/Coding/Hack Reactor/senior_section/system_design_capstone/reviews/csv/reviews.csv'
});

var reviewArr = [];
// data size 
const data_size = 1000;
// listing and reviews of listing 
for (let j = 0; j < data_size; j++) {
  reviewArr.push({
    date: faker.date.recent(),
    comment: faker.lorem.paragraphs(),
    ratingOverall: faker.finance.amount(1, 5, 1),
    ratingCommunication: faker.finance.amount(1, 5, 1),
    ratingCheck_in: faker.finance.amount(1, 5, 1),
    ratingCleanliness: faker.finance.amount(1, 5, 1),
    ratingAccuracy: faker.finance.amount(1, 5, 1),
    ratingLocation: faker.finance.amount(1, 5, 1),
    ratingValue: faker.finance.amount(1, 5, 1),
  });

  csvWriter.writeRecords(reviewArr)       // returns a promise
    .then(() => {
      console.log('...Done');
    });
}










// const createReview = () => ({
//   date: faker.date.recent(),
//   comment: faker.lorem.paragraphs(),
//   ratingOverall: faker.finance.amount(1, 5, 1),
//   ratingCommunication: faker.finance.amount(1, 5, 1),
//   ratingCheck_in: faker.finance.amount(1, 5, 1),
//   ratingCleanliness: faker.finance.amount(1, 5, 1),
//   ratingAccuracy: faker.finance.amount(1, 5, 1),
//   ratingLocation: faker.finance.amount(1, 5, 1),
//   ratingValue: faker.finance.amount(1, 5, 1),
//   host: faker.random.number({ min: 1, max: 20 }),
//   listing: faker.random.number({ min: 1, max: 20 }),
//   user: faker.random.number({ min: 1, max: 20 }),
// })

// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   const fakeReview = [];
//   const desiredFakeReview = 7;
//   for (let i = 0; i < desiredFakeReview; i++) {
//     fakeReview.push(createReview());
//   }
//   return knex('review').insert(fakeReview);
// };