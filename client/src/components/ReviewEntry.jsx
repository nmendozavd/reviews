import React from 'react';
import styles from '../../dist/styles/styles.css';

const ReviewEntry = ({ review }) => {
  console.log(review);
  return (
    <div className={styles.reviewEntry}>
      <div className={styles.reviewHeader}>
        <div className={styles.avatarContainer}>
          <img src={review.reviewAuthorDetails.userPicture} alt="avatar"/>
        </div>
        <div className={styles.authoringDetails}>
          <div className={styles.firstName}>{review.reviewAuthorDetails.name}</div>
          <div className={styles.date}>{review.reviewAuthorDetails.date}</div>
        </div>
      </div>
      <div className={styles.reviewText}>{review.reviewAuthorDetails.reviewText}</div>
    </div>
  );
};

export default ReviewEntry;