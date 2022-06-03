-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema all-in1
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema all-in1
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `all-in1`;
USE all-in1 ;

-- -----------------------------------------------------
-- Table all-in1.`admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`Admins` (
  `admin_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(120) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);




-- -----------------------------------------------------
-- Table `all-in1`.`donations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`donationsMaterial` (
  `donation_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `Donation_name` VARCHAR(255) NOT NULL,
  `type` VARCHAR(45)NOT NULL,
  `adress` VARCHAR(255) NOT NULL,
  `image_url` VARCHAR(255),
  `created_at` VARCHAR(255) NOT NULL,
  `phone` INT NOT NULL,
  `description` VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS `all-in1`.`donationsFinancial` (
  `donation_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `typeAmount` varchar(255) NOT NULL,
  `amount` INT(45) NULL,
  `category` VARCHAR(255) NOT NULL,
  `created_at` VARCHAR(255) NOT NULL,
  `phone` INT NOT NULL,
  `description` VARCHAR(255)
);




-- -----------------------------------------------------
-- Table all-in1.`contributors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`Contributors` (
  `contributor_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(120) NOT NULL,
  `role` VARCHAR(100) NOT NULL,
  `created_at` VARCHAR(100) NOT NULL
);


-- -----------------------------------------------------
-- Table `all-in1`.`Events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`Events` (
  `event_id` INT(20) NOT NULL,
  `event_name` VARCHAR(40) NOT NULL,
  `category` VARCHAR(40) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `date`  VARCHAR(255) NOT NULL,
  `socialMedia` VARCHAR(255) NULL,
  `amount` INT(255) NOT NULL
);


-- -----------------------------------------------------
-- Table `all-in1`.`Needs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`postNeeds` (
  `need_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `need_name` VARCHAR(255) NOT NULL,
  `CIN` VARCHAR(255),
  `description` VARCHAR(200),
  `adress` VARCHAR(200),
  `status` VARCHAR(255) NOT NULL,
  `created_at` VARCHAR(255) NOT NULL
);
-- -----------------------------------------------------
-- Table `all-in1`.`Reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`Reviews` (
  `review_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(200),
  `image` VARCHAR(200),
  `adress` VARCHAR(200),
  `created_at` VARCHAR(200) NOT NULL
);
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;