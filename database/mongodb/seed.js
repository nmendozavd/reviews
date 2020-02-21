const mongoose = require('mongoose');
const faker = require('faker');
const Listing = require('./index.js')
require('events').EventEmitter.prototype._maxListeners = 1000;

async function seedDB(outer, inner) {
  let counter = 0;
  for (let j = 0; j < outer; j++) {
    let listingsArr = [];
    for (let i = 0; i < inner; i++) {
      let obj = {
        listing_id: counter,
        ratingOverall: faker.finance.amount(1, 5, 1),
        ratingCommunication: faker.finance.amount(1, 5, 1),
        ratingCheckIn: faker.finance.amount(1, 5, 1),
        ratingCleanliness: faker.finance.amount(1, 5, 1),
        ratingAccuracy: faker.finance.amount(1, 5, 1),
        ratingLocation: faker.finance.amount(1, 5, 1),
        ratingValue: faker.finance.amount(1, 5, 1),
        host: {
          host_id: counter,
          hostName: faker.name.findName(),
          hostPhoto: faker.internet.avatar(),
        },
        reviews: [
          { 
            review_id: 1,
            reviewerName: faker.name.findName(),
            reviewerPhoto: faker.internet.avatar(),
            reviewerLink: faker.internet.url(),
            date: faker.date.recent(),
            reviewerComment: faker.lorem.paragraphs(),
            scores: {
              accuracy: faker.finance.amount(1, 5, 1),
              communication: faker.finance.amount(1, 5, 1),
              cleanliness: faker.finance.amount(1, 5, 1),
              checkIn: faker.finance.amount(1, 5, 1),
              value: faker.finance.amount(1, 5, 1),
              location: faker.finance.amount(1, 5, 1),
            }
          },
          {
            review_id: 2,
            reviewerName: faker.name.findName(),
            reviewerPhoto: faker.internet.avatar(),
            reviewerLink: faker.internet.url(),
            date: faker.date.recent(),
            reviewerComment: faker.lorem.paragraphs(),
            scores: {
              accuracy: faker.finance.amount(1, 5, 1),
              communication: faker.finance.amount(1, 5, 1),
              cleanliness: faker.finance.amount(1, 5, 1),
              checkIn: faker.finance.amount(1, 5, 1),
              value: faker.finance.amount(1, 5, 1),
              location: faker.finance.amount(1, 5, 1),
            }
          },
          {
            review_id: 3,
            reviewerName: faker.name.findName(),
            reviewerPhoto: faker.internet.avatar(),
            reviewerLink: faker.internet.url(),
            date: faker.date.recent(),
            reviewerComment: faker.lorem.paragraphs(),
            scores: {
              accuracy: faker.finance.amount(1, 5, 1),
              communication: faker.finance.amount(1, 5, 1),
              cleanliness: faker.finance.amount(1, 5, 1),
              checkIn: faker.finance.amount(1, 5, 1),
              value: faker.finance.amount(1, 5, 1),
              location: faker.finance.amount(1, 5, 1),
            }
          }
        ]
      };
      listingsArr.push(obj);
      counter++;
      // console log progress
      if (counter % 10000 === 0) {
        console.log('progress', counter)
      }
    }
    
    await Listing.Listing.insertMany(listingsArr);
  }
}

console.time('seed time');
seedDB(1000, 10000);
console.timeEnd('seed time');



