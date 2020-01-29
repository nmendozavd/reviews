import React from 'react';

const ReviewEntry = ({ review }) => {
  return (
    <div className="ReviewEntry">
      <img src={review.avatar}></img>
      <h2>{review.firstName}</h2>
      <h2>{review.date}</h2>
      <h2>{review.reviewText}</h2>
    </div>
  );
};

export default ReviewEntry;