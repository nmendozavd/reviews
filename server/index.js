const express = require('express');
const db = require('../database/mysql/db.js');
const app = express();
const port = 3000;
const path = require('path');
const controller = require('./controller/reviews.js');

app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/v1/api/listing/:listing_id', controller.getListing);

app.post('/v1/api/listing/:listing_id/reviews/:review_id', controller.postReview);


app.listen(port, () => console.log(`Reviews server is listening on port ${port}!\n`))