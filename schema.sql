-- DROP DATABASE IF EXISTS SDC;

-- CREATE DATABASE IF NOT EXISTS SDC;

USE SDC;

CREATE TABLE IF NOT EXISTS hosts (
  host_id INT NOT NULL AUTO_INCREMENT,
  hostName VARCHAR (255),
  hostPhoto VARCHAR (255),
  PRIMARY KEY(host_id)
);


CREATE TABLE IF NOT EXISTS users (
  user_id INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR (255),
  userPhoto VARCHAR (255),
  PRIMARY KEY(user_id)
);

CREATE TABLE IF NOT EXISTS listings (
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
  PRIMARY KEY (listing_id),
  FOREIGN KEY (host) REFERENCES hosts (host_id)
);

CREATE TABLE IF NOT EXISTS reviews (
  review_id INT NOT NULL AUTO_INCREMENT,
  date VARCHAR(255),
  comment TEXT,
  reviewOverall DECIMAL(2,1),
  reviewCommunication DECIMAL(2,1), 
  reviewCheck_in DECIMAL(2,1),
  reviewCleanliness DECIMAL(2,1),
  reviewAccuracy DECIMAL(2,1),
  reviewLocation DECIMAL(2,1),
  reviewValue DECIMAL(2,1),
  host INT,
  listing INT,
  user INT,
  PRIMARY KEY (review_id),
  FOREIGN KEY (host) REFERENCES hosts (host_id),
  FOREIGN KEY (listing) REFERENCES listings (listing_id),
  FOREIGN KEY (user) REFERENCES users (user_id)
);


-- LOAD DATA LOCAL INFILE './csv/hosts.csv'
-- INTO TABLE hosts
-- FIELDS TERMINATED BY ',' 
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;

-- LOAD DATA LOCAL INFILE './csv/users.csv'
-- INTO TABLE users
-- FIELDS TERMINATED BY ',' 
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;

-- LOAD DATA LOCAL INFILE './csv/listings.csv'
-- INTO TABLE listings
-- FIELDS TERMINATED BY ',' 
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;

-- LOAD DATA LOCAL INFILE './csv/reviews5.csv'
-- INTO TABLE reviews
-- FIELDS TERMINATED BY ',' 
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;



