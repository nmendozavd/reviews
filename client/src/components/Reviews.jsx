import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import ReviewsHeader from './ReviewsHeader.jsx';

function Reviews(props) {
  let myArray = props.reviews;
  const stats = getStatsAndScores(props.reviews);
  console.log(props.reviews);
  return (
    <div className="Reviews">
      <ReviewsHeader reviewsStats={stats} />
      {props.reviews.map(r => <ReviewEntry review={r} />)}
    </div>
  );
};

export default Reviews;

function getStatsAndScores(arrayOfReviews) {
  let res = {
    // General stats
    starAvg: 0.0,
    reviewsCount: arrayOfReviews.length,
    // 6 scores
    communicationScore: 0.0,
    accuracyScore: 0.0,
    valueScore: 0.0,
    checkinScore: 0.0,
    locationScore: 0.0,
    cleanlinessScore: 0.0
  };

  for (let i = 0; i < arrayOfReviews.length; i++) {
    res.communicationScore += arrayOfReviews[i].coomunication;
    res.accuracyScore += arrayOfReviews[i].accuracy;
    res.valueScore += arrayOfReviews[i].value;
    res.checkinScore += arrayOfReviews[i].checkIn;
    res.locationScore += arrayOfReviews[i].location;
    res.cleanlinessScore += arrayOfReviews[i].cleanliness;
  }

  res.communicationScore /= 6;
  res.accuracyScore /= 6;
  res.valueScore /= 6;
  res.checkinScore /= 6;
  res.locationScore /= 6;
  res.cleanlinessScore /= 6;

  res.starAvg =
    res.communicationScore +
    res.accuracyScore +
    res.valueScore +
    res.checkinScore +
    res.locationScore +
    res.cleanlinessScore;
  res.starAvg /= 6;

  return res;
}