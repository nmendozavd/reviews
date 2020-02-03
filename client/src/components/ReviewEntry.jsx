import React from 'react';
import styles from '../../dist/styles/styles.css';

const ReviewEntry = ({ review }) => {
  // console.log(review);
  return (
    <div className={styles.reviewEntry}>
      <div className={styles.reviewHeader}>
        <div className={styles.avatarContainer}>
          <img src={review.avatar} alt="avatar"/>
        </div>
        <div className={styles.authoringDetails}>
          <div className={styles.firstName}>{review.firstName}</div>
          <div className={styles.date}>{review.date}</div>
        </div>
      </div>
      <div className={styles.reviewText}>{review.reviewText}</div>
    </div>
  );
};

export default ReviewEntry;