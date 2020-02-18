var faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Writing table to CSV file
const csvWriter = createCsvWriter({
  header: [
    { id: 'hostName', title: 'hostName' },
    { id: 'hostPhoto', title: 'hostPhoto' }
  ],
  path: '/Users/noelmendoza/Documents/Noel Mendoza/Coding/Hack Reactor/senior_section/system_design_capstone/reviews/csv/hosts.csv'
});

var hostsArr = [];
// data size 
const data_size = 1000;
// listing and reviews of listing 
for (let j = 0; j < data_size; j++) {
  hostsArr.push({
    hostName: faker.name.findName(),
    hostPhoto: `https://airbnb-reviews-users-pictures.s3-us-west-1.amazonaws.com/${Math.ceil(Math.random() * 3000)}.jpg`
  });

  csvWriter.writeRecords(hostsArr)       // returns a promise
    .then(() => {
      console.log('...Done');
    });
}



// knex seeding 
// const createHost = () => ({
//   hostName: faker.name.findName(),
//   hostPhoto: `https://airbnb-reviews-users-pictures.s3-us-west-1.amazonaws.com/${Math.ceil(Math.random() * 3000)}.jpg`
// })

// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   const fakeHosts = [];
//   const desiredFakeHosts = 20;
//   for (let i = 0; i < desiredFakeHosts; i++) {
//     fakeHosts.push(createHost());
//   }
//   return knex('host').insert(fakeHosts);
// };