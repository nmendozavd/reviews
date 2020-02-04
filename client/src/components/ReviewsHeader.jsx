import React from 'react';
import styles from '../../dist/styles/styles.css';

class ReviewsHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateStats = this.updateStats.bind(this);
  }

  updateStats(stats) {
    this.setState(stats);
  }

  render() {
    return (
      <div className={styles.reviewsHeader} >
        <div className={styles.reviewsTitle}>Reviews</div>
        <div className={styles.secondLineHeader}>
          <div className={styles.stats}>
            <div className={styles.star}>★</div>
            <div className={styles.totalGradeAndReviewsAmount}>{this.props.stats.starAvg}</div>
            <div className={styles.lineDivider}>|</div>
            <div className={styles.totalGradeAndReviewsAmount}>{this.props.stats.reviewsCount}</div>
            <div className={styles.reviewsSubTitle}>reviews</div>
          </div>
          <div className={styles.search}>
            <input type="text" placeholder="Search reviews"></input>
            <button>🔍</button>
          </div>
        </div>

        <div className={styles.scores}>
          <div className={styles.scoresRow}>
            <span>Check-in {this.props.stats.checkinScore}</span>
            <span>Communication {this.props.stats.communicationScore}</span>
          </div>
          <div className={styles.scoresRow}>
            <span>Accuracy {this.props.stats.accuracyScore}</span>
            <span>Location {this.props.stats.locationScore}</span>
          </div>
          <div className={styles.scoresRow}>
            <span>Cleanliness {this.props.stats.cleanlinessScore}</span>
            <span>Value {this.props.stats.valueScore}</span>
          </div>
        </div>
      </div>

    );
  }
};

export default ReviewsHeader;