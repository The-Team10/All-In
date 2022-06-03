-- MySQL Workbench Forward Engineering


-- -----------------------------------------------------
-- Schema all-in1
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema all-in1
-- -----------------------------------------------------
DROP DATABASE IF EXISTS all-in1;

CREATE SCHEMA IF NOT EXISTS all-in1;
USE all-in1 ;

-- -----------------------------------------------------
-- Table all-in1.`Admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Admins (
  admin_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(120) NOT NULL,
  role VARCHAR(45) NOT NULL,
  created_at VARCHAR(200) NOT NULL 
  );


-- -----------------------------------------------------
-- Table all-in1.`Contributors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS all-in1.`Contributors` (
  contributor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(120) NOT NULL,
  role VARCHAR(100) NOT NULL,
  photo VARCHAR(200),
  anonymeBOOLEAN,
  created_at VARCHAR(100) NOT NULL
);


-- -----------------------------------------------------
-- Table all-in1.`donations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS all-in1.`donationsMaterial` (
  donation_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  Donation_name VARCHAR(255) NOT NULL,
  type VARCHAR(45)NOT NULL,
  adress VARCHAR(255) NOT NULL,
  image_url VARCHAR(255),
  created_at VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  description VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS all-in1.`donationsFinancial` (
  donation_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  typeAmount VARCHAR(255) NOT NULL,
  amount  VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  created_at VARCHAR(255) NOT NULL,
  phone  VARCHAR(255) NOT NULL,
  description VARCHAR(255)
);


-- -----------------------------------------------------
-- Table all-in1.`Events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS all-in1.`Events` (
  event_id INT(20) NOT NULL,
  eventName VARCHAR(40) NOT NULL,
  category VARCHAR(40) NOT NULL,
  description VARCHAR(255) NOT NULL,
  date  VARCHAR(255) NOT NULL,
  amount INT(255) NOT NULL
);

-- -----------------------------------------------------
-- Table all-in1.`Needs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS all-in1.`postneeds` (
  need_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255)NOT NULL,
  last_name VARCHAR(255)NOT NULL,
  CIN VARCHAR(255),
 description VARCHAR(200),
  phone VARCHAR(200) NOT NULL,
  adress VARCHAR(200) NOT NULL,
  created_at VARCHAR(255) NOT NULL
);




-- -----------------------------------------------------
-- Table all-in1.`Contributors_has_Needs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS all-in1.`review` (
  review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
    description VARCHAR(200),
    image VARCHAR(200),
    adress VARCHAR(200),
  created_at VARCHAR(200) NOT NULL 
); 


-- -----------------------------------------------------
-- Table all-in1.`Contact Us`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS all-in1.`Contact` (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
   adressEmail VARCHAR(200),
    phone VARCHAR(200),
    adress VARCHAR(200),
  description VARCHAR(200) NOT NULL 
);