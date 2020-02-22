const express = require('express');
const db = require('../database/mysql/index.js');
const app = express();
const port = 3000;
const path = require('path');
const { getListing } = require('../database/mysql/controller/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/v1/api/listing/:listing_id', getListing);




// app.post('', (req, res) => {

// });





app.listen(port, () => console.log(`Reviews server is listening on port ${port}!\n`))