var faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('../../../csv/users.csv');
writeUsers.write('id,userName,userPhoto\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 5000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const userName = faker.name.findName();
      const userPhoto = faker.internet.avatar();
      const data = `${id},${userName},${userPhoto}\n`;
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
