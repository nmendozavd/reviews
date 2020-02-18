var faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Writing table to CSV file
const csvWriter = createCsvWriter({
  header: [
    { id: 'userName', title: 'userName' },
    { id: 'userPhoto', title: 'userPhoto' }
  ],
  path: '/Users/noelmendoza/Documents/Noel Mendoza/Coding/Hack Reactor/senior_section/system_design_capstone/reviews/csv/users.csv'
});

var usersArr = [];
// data size 
const data_size = 1000;
// listing and reviews of listing 
for (let j = 0; j < data_size; j++) {
  usersArr.push({
    userName: faker.name.findName(),
    userPhoto: `https://airbnb-reviews-users-pictures.s3-us-west-1.amazonaws.com/${Math.ceil(Math.random() * 3000)}.jpg`
  });

  csvWriter.writeRecords(usersArr)       // returns a promise
    .then(() => {
      console.log('...Done');
    });
}

// const createUser = () => ({
//   userName: faker.name.findName(),
//   userPhoto: `https://airbnb-reviews-users-pictures.s3-us-west-1.amazonaws.com/${Math.ceil(Math.random() * 3000)}.jpg`
// })

// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   const fakeUser = [];
//   const desiredFakeUser = 20;
//   for (let i = 0; i < desiredFakeUser; i++) {
//     fakeUser.push(createUser());
//   }
//   return knex('user').insert(fakeUser);
// };