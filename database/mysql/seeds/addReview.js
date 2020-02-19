var faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('../../../csv/reviews.csv');
writeUsers.write('id,date,comment,ratingOverall,ratingCommunication,ratingCheck_in,ratingCleanliness,ratingAccuracy,ratingLocation,ratingValue,host,listing,user\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 50000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const date = faker.date.recent();
      const comment = faker.lorem.paragraph();
      const ratingOverall = faker.finance.amount(1, 5, 1);
      const ratingCommunication = faker.finance.amount(1, 5, 1);
      const ratingCheck_in = faker.finance.amount(1, 5, 1);
      const ratingCleanliness = faker.finance.amount(1, 5, 1);
      const ratingAccuracy = faker.finance.amount(1, 5, 1);
      const ratingLocation = faker.finance.amount(1, 5, 1);
      const ratingValue = faker.finance.amount(1, 5, 1);
      const host = faker.random.number({ min: 1, max: 5000000 });
      const listing = faker.random.number({ min: 1, max: 10000000 });
      const user = faker.random.number({ min: 1, max: 5000000 });
      
      const data = `${id},${date},${comment},${ratingOverall},${ratingCommunication},${ratingCheck_in},${ratingCleanliness},${ratingAccuracy},${ratingLocation},${ratingValue},${host},${listing},${user}\n`;
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
  console.log('...ay dawg, finished exporting cvs.')
});




// // Writing table to CSV file
// const csvWriter = createCsvWriter({
//   header: [
//     { id: 'date', title: 'date' },
//     { id: 'comment', title: 'comment' },
//     { id: 'ratingOverall', title: 'ratingOverall' },
//     { id: 'ratingCommunication', title: 'ratingCommunication' },
//     { id: 'ratingCheck_in', title: 'ratingCheck_in' },
//     { id: 'ratingCleanliness', title: 'ratingCleanliness' },
//     { id: 'ratingAccuracy', title: 'ratingAccuracy' },
//     { id: 'ratingLocation', title: 'ratingLocation' },
//     { id: 'ratingValue', title: 'ratingValue' }
//   ],
//   path: '/Users/noelmendoza/Documents/Noel Mendoza/Coding/Hack Reactor/senior_section/system_design_capstone/reviews/csv/reviews.csv'
// });

// var reviewArr = [];
// // data size 
// const data_size = 50000000;
// // listing and reviews of listing 
// for (let j = 0; j < data_size; j++) {
//   reviewArr.push({
//     date: faker.date.recent(),
//     comment: faker.lorem.paragraphs(),
//     ratingOverall: faker.finance.amount(1, 5, 1),
//     ratingCommunication: faker.finance.amount(1, 5, 1),
//     ratingCheck_in: faker.finance.amount(1, 5, 1),
//     ratingCleanliness: faker.finance.amount(1, 5, 1),
//     ratingAccuracy: faker.finance.amount(1, 5, 1),
//     ratingLocation: faker.finance.amount(1, 5, 1),
//     ratingValue: faker.finance.amount(1, 5, 1),
//   });

//   csvWriter.writeRecords(reviewArr)       // returns a promise
//     .then(() => {
//       console.log('...Done');
//     });
// }


