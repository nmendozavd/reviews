import React from 'react';
// import Avatar from './Avatar.jsx';
// import FirstName from './FirstName.jsx';
// import Date from './Date.jsx';
// import ReviewText from './ReviewText.jsx';

const ReviewEntry = ({ review }) => {
  return (
    <div className="ReviewEntry">
      <div><img src={review.avatar}></img></div>
      <div>{review.firstName}</div>
      <div>{review.date}</div>
      <div>{review.reviewText}</div>
    </div>
  );
};

export default ReviewEntry;