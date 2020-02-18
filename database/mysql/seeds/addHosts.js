var faker = require('faker');

const createHost = () => ({
  hostName: faker.name.findName(),
  hostPhoto: `https://airbnb-reviews-users-pictures.s3-us-west-1.amazonaws.com/${Math.ceil(Math.random() * 3000)}.jpg`
})

exports.seed = function (knex) {
  // Deletes ALL existing entries
  const fakeHosts = [];
  const desiredFakeHosts = 20;
  for (let i = 0; i < desiredFakeHosts; i++) {
    fakeHosts.push(createHost());
  }
  return knex('host').insert(fakeHosts);
};