var faker = require('faker');

const createReview = () => ({
  date: faker.date.recent(),
  comment: faker.lorem.paragraphs(),
  ratingOverall: faker.finance.amount(1, 5, 1),
  ratingCommunication: faker.finance.amount(1, 5, 1),
  ratingCheck_in: faker.finance.amount(1, 5, 1),
  ratingCleanliness: faker.finance.amount(1, 5, 1),
  ratingAccuracy: faker.finance.amount(1, 5, 1),
  ratingLocation: faker.finance.amount(1, 5, 1),
  ratingValue: faker.finance.amount(1, 5, 1),
  host: faker.random.number({ min: 1, max: 20 }),
  listing: faker.random.number({ min: 1, max: 20 }),
  user: faker.random.number({ min: 1, max: 20 }),
})

exports.seed = function (knex) {
  // Deletes ALL existing entries
  const fakeReview = [];
  const desiredFakeReview = 7;
  for (let i = 0; i < desiredFakeReview; i++) {
    fakeReview.push(createReview());
  }
  return knex('review').insert(fakeReview);
};