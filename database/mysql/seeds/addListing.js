var faker = require('faker');

const createListing = () => ({
  listingTitle: faker.address.streetAddress(),
  ratingOverall: faker.finance.amount(1, 5, 1),
  ratingCommunication: faker.finance.amount(1, 5, 1),
  ratingCheck_in: faker.finance.amount(1, 5, 1),
  ratingCleanliness: faker.finance.amount(1, 5, 1),
  ratingAccuracy: faker.finance.amount(1, 5, 1),
  ratingLocation: faker.finance.amount(1, 5, 1),
  ratingValue: faker.finance.amount(1, 5, 1),
  host: faker.random.number({ min: 1, max: 20 }),
})

exports.seed = function (knex) {
  // Deletes ALL existing entries
  const fakeListing = [];
  const desiredFakeListing = 20;
  for (let i = 0; i < desiredFakeListing; i++) {
    fakeListing.push(createListing());
  }
  return knex('listing').insert(fakeListing);
};