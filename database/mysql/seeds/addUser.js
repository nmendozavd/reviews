var faker = require('faker');

const createUser = () => ({
  userName: faker.name.findName(),
  userPhoto: `https://airbnb-reviews-users-pictures.s3-us-west-1.amazonaws.com/${Math.ceil(Math.random() * 3000)}.jpg`
})

exports.seed = function (knex) {
  // Deletes ALL existing entries
  const fakeUser = [];
  const desiredFakeUser = 20;
  for (let i = 0; i < desiredFakeUser; i++) {
    fakeUser.push(createUser());
  }
  return knex('user').insert(fakeUser);
};