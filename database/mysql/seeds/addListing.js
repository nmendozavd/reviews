var faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('../../../csv/listings.csv');
writeUsers.write('id,listingTitle,ratingOverall,ratingCommunication,ratingCheck_in,ratingCleanliness,ratingAccuracy,ratingLocation,ratingValue,host\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const listingTitle = faker.address.streetAddress();
      const ratingOverall = faker.finance.amount(1, 5, 1);
      const ratingCommunication = faker.finance.amount(1, 5, 1);
      const ratingCheck_in = faker.finance.amount(1, 5, 1);
      const ratingCleanliness = faker.finance.amount(1, 5, 1);
      const ratingAccuracy = faker.finance.amount(1, 5, 1);
      const ratingLocation = faker.finance.amount(1, 5, 1);
      const ratingValue = faker.finance.amount(1, 5, 1);
      const host = faker.random.number({ min: 1, max: 5000000 });

      const data = `${id},${listingTitle},${ratingOverall},${ratingCommunication},${ratingCheck_in},${ratingCleanliness},${ratingAccuracy},${ratingLocation},${ratingValue},${host}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write()
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
  console.log('...ay dawg, finished exporting csv.')
});


// var listingArr = [];
// // data size 
// const data_size = 1000000;
// // listing and reviews of listing 
// for (let j = 0; j < data_size; j++) {
//   listingArr.push({
//     listingTitle: faker.address.streetAddress(),
//     ratingOverall: faker.finance.amount(1, 5, 1),
//     ratingCommunication: faker.finance.amount(1, 5, 1),
//     ratingCheck_in: faker.finance.amount(1, 5, 1),
//     ratingCleanliness: faker.finance.amount(1, 5, 1),
//     ratingAccuracy: faker.finance.amount(1, 5, 1),
//     ratingLocation: faker.finance.amount(1, 5, 1),
//     ratingValue: faker.finance.amount(1, 5, 1),
//     host: faker.random.number({ min: 1, max: 20 }),
//   });


