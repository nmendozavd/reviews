require('newrelic');
const express = require('express');
const db = require('../database/mysql/db.js');
const app = express();
const port = 3000;
const path = require('path');
const controller = require('./controller/reviews.js');
const cors = require('cors');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.get('/v1/api/listing/:listing_id', controller.getListing);

app.post('/v1/api/listing/:listing_id/reviews/:review_id', controller.postReview);

app.put('/v1/api/listing/:listing_id/reviews/:review_id', controller.updateReview);

app.delete('/v1/api/listing/:listing_id/reviews/:review_id', controller.deleteReview);

app.listen(port, () => console.log(`Reviews server is listening on port ${port}!\n`))