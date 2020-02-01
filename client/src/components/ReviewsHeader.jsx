import React from 'react';
import styles from '../../dist/styles/styles.css';

const ReviewsHeader = (props) => {
  return (
    <div className={styles.reviewsHeader}>
      <div className={styles.reviewsTitle}>Reviews</div>
      <div className={styles.secondLineHeader}>
        <div className={styles.stats}>
          <div className={styles.star}>★</div>
          <div className={styles.totalGradeAndReviewsAmount}>4.93</div>
          <div className={styles.lineDivider}>|</div>
          <div className={styles.totalGradeAndReviewsAmount}>53</div>
          <div className={styles.reviewsSubTitle}>reviews</div>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search reviews"></input>
          <button>🔍</button>
        </div>
      </div>
    </div>

  );
};

export default ReviewsHeader;