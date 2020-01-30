import React from 'react';
// import Avatar from './Avatar.jsx';
// import FirstName from './FirstName.jsx';
// import Date from './Date.jsx';
// import ReviewText from './ReviewText.jsx';
import styles from '../styles/styles.css';

const ReviewEntry = ({ review }) => {
  return (
    <div className="ReviewEntry">
      <div className={styles.avatar}><img src={review.avatar}></img></div>
      <div>{review.firstName}</div>
      <div>{review.date}</div>
      <div>{review.reviewText}</div>
    </div>
  );
};

export default ReviewEntry;