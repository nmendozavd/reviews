DROP DATABASE IF EXISTS SDC;

CREATE DATABASE SDC;

USE SDC;

CREATE TABLE host (
  host_id INT NOT NULL AUTO_INCREMENT,
  hostName VARCHAR (255),
  hostPhoto VARCHAR (255),
  PRIMARY KEY(host_id)
);

CREATE TABLE user (
  user_id INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR (255),
  userPhoto VARCHAR (255),
  PRIMARY KEY(user_id)
);

CREATE TABLE listing (
  listing_id INT NOT NULL AUTO_INCREMENT,
  listingTitle VARCHAR(255),
  ratingOverall DECIMAL(2,1),
  ratingCommunication DECIMAL(2,1), 
  ratingCheck_in DECIMAL(2,1),
  ratingCleanliness DECIMAL(2,1),
  ratingAccuracy DECIMAL(2,1),
  ratingLocation DECIMAL(2,1),
  ratingValue DECIMAL(2,1), 
  host INT,
  PRIMARY KEY (listing_id)
  -- FOREIGN KEY (host) REFERENCES host(host_id)
);

CREATE TABLE review (
  review_id INT NOT NULL AUTO_INCREMENT,
  date DATETIME,
  comment TEXT,
  ratingOverall DECIMAL(2,1),
  ratingCommunication DECIMAL(2,1), 
  ratingCheck_in DECIMAL(2,1),
  ratingCleanliness DECIMAL(2,1),
  ratingAccuracy DECIMAL(2,1),
  ratingLocation DECIMAL(2,1),
  ratingValue DECIMAL(2,1),
  host INT,
  listing INT,
  user INT,
  PRIMARY KEY (review_id)
  -- FOREIGN KEY (host) REFERENCES host(host_id),
  -- FOREIGN KEY (listing) REFERENCES listing(listing_id),
  -- FOREIGN KEY (user) REFERENCES user(user_id)
);






