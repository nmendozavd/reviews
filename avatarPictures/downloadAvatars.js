var faker = require('faker');
const fs = require('fs');
var request = require('request');

const AVATAR_AMOUNT = 3000;

for (let i = 0; i < AVATAR_AMOUNT; i++) {
  var options = {
    url: faker.image.avatar(),
    method: "get",
    encoding: null
  };
  console.log('Requesting image..');
  request(options, function (error, response, body) {

    if (error) {
      console.error('error:', error);
    } else {
      console.log('Response: StatusCode:', response && response.statusCode);
      console.log('Response: Body: Length: %d. Is buffer: %s', body.length, (body instanceof Buffer));

      fs.writeFile(`./picturesFiles/${i}.jpg`, body, (err) => {
        if (err) {
          throw err;
        }
        console.log('the file has been saved');
        console.log(response.body)
      })
    }
  });
}
