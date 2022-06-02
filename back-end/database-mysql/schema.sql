-- MySQL Workbench Forward Engineering


-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema all-in1
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema all-in1
-- -----------------------------------------------------
DROP DATABASE IF EXISTS `all-in1`;
CREATE SCHEMA IF NOT EXISTS `all-in1` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;

USE `all-in1` ;


-- -----------------------------------------------------
-- Table `all-in1`.`admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`admins` (
  `admin_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(120) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`admin_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `all-in1`.`contributors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`contributors` (
  `contributor_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(120) NOT NULL,
  `role` VARCHAR(100) NOT NULL,
  `photo` VARCHAR(200),
  `anonyme`BOOLEAN,
  `created_at` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`contributor_id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `all-in1`.`events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`events` (
  `event_id` INT NOT NULL,
  `event_name` VARCHAR(40) NOT NULL,
  `category` VARCHAR(40) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `socialMedia` VARCHAR(255) NULL DEFAULT NULL,
  `amount` INT NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`event_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `all-in1`.`contributors_has_events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`contributors_has_events` (
  `Contributors_contributor_id` INT NOT NULL,
  `Events_event_id` INT NOT NULL,
  PRIMARY KEY (`Contributors_contributor_id`, `Events_event_id`),
  INDEX `fk_Contributors_has_Events_Events1_idx` (`Events_event_id` ASC) VISIBLE,
  INDEX `fk_Contributors_has_Events_Contributors1_idx` (`Contributors_contributor_id` ASC) VISIBLE,
  CONSTRAINT `fk_Contributors_has_Events_Contributors1`
    FOREIGN KEY (`Contributors_contributor_id`)
    REFERENCES `all-in1`.`contributors` (`contributor_id`),
  CONSTRAINT `fk_Contributors_has_Events_Events1`
    FOREIGN KEY (`Events_event_id`)
    REFERENCES `all-in1`.`events` (`event_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `all-in1`.`needs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`needs` (
  `need_id` INT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(255) NOT NULL,
  `cin` INT(8) NOT NULL,
  `status` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `adress` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `description` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`need_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `all-in1`.`contributors_has_needs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`contributors_has_needs` (
  `owner_id` INT NOT NULL,
  `Needs_need_id` INT NOT NULL,
  `provider_id` INT NOT NULL,
  `amount` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`owner_id`, `Needs_need_id`, `provider_id`),
  INDEX `fk_Contributors_has_Needs_Needs1_idx` (`Needs_need_id` ASC) VISIBLE,
  INDEX `fk_Contributors_has_Needs_Contributors1_idx` (`owner_id` ASC) VISIBLE,
  INDEX `fk_Contributors_has_Needs_Contributors2_idx` (`provider_id` ASC) VISIBLE,
  CONSTRAINT `fk_Contributors_has_Needs_Contributors1`
    FOREIGN KEY (`owner_id`)
    REFERENCES `all-in1`.`contributors` (`contributor_id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_Contributors_has_Needs_Contributors2`
    FOREIGN KEY (`provider_id`)
    REFERENCES `all-in1`.`contributors` (`contributor_id`),
  CONSTRAINT `fk_Contributors_has_Needs_Needs1`
    FOREIGN KEY (`Needs_need_id`)
    REFERENCES `all-in1`.`needs` (`need_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `all-in1`.`donations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`donations` (
  `donation_id` INT NOT NULL AUTO_INCREMENT,
  `donation_name` VARCHAR(255) NULL DEFAULT NULL,
  `type` VARCHAR(45) NULL DEFAULT NULL,
  `status` VARCHAR(255) NOT NULL,
  `category` VARCHAR(40) NOT NULL,
  `amount` INT NULL DEFAULT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `receiver_id` INT NOT NULL,
  `owner_id` INT NOT NULL,
  PRIMARY KEY (`donation_id`, `receiver_id`, `owner_id`),
  INDEX `fk_donations_Contributors1_idx` (`receiver_id` ASC) VISIBLE,
  INDEX `fk_donations_Contributors2_idx` (`owner_id` ASC) VISIBLE,
  CONSTRAINT `fk_donations_Contributors1`
    FOREIGN KEY (`receiver_id`)
    REFERENCES `all-in1`.`contributors` (`contributor_id`),
  CONSTRAINT `fk_donations_Contributors2`
    FOREIGN KEY (`owner_id`)
    REFERENCES `all-in1`.`contributors` (`contributor_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `all-in1`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`reviews` (
  `review_id` INT NOT NULL,
  `author` VARCHAR(40) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `socialMedia` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`review_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `all-in1`.`contributors_has_reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`contributors_has_reviews` (
  `contributors_contributor_id` INT NOT NULL,
  `reviews_review_id` INT NOT NULL,
  PRIMARY KEY (`contributors_contributor_id`, `reviews_review_id`),
  INDEX `fk_contributors_has_reviews_reviews1_idx` (`reviews_review_id` ASC) VISIBLE,
  INDEX `fk_contributors_has_reviews_contributors1_idx` (`contributors_contributor_id` ASC) VISIBLE,
  CONSTRAINT `fk_contributors_has_reviews_contributors1`
    FOREIGN KEY (`contributors_contributor_id`)
    REFERENCES `all-in1`.`contributors` (`contributor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contributors_has_reviews_reviews1`
    FOREIGN KEY (`reviews_review_id`)
    REFERENCES `all-in1`.`reviews` (`review_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `all-in1`.`helpcategories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`helpcategories` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `category_name` ENUM('health', 'eductaion', 'food') NOT NULL,
  `donations_donation_id` INT NOT NULL,
  `donations_receiver_id` INT NOT NULL,
  `donations_owner_id` INT NOT NULL,
  PRIMARY KEY (`category_id`, `donations_donation_id`, `donations_receiver_id`, `donations_owner_id`),
  CONSTRAINT `fk_helpcategories_donations1`
    FOREIGN KEY (`donations_donation_id` , `donations_receiver_id` , `donations_owner_id`)
    REFERENCES `all-in1`.`donations` (`donation_id` , `receiver_id` , `owner_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `all-in1`.`admins_has_events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `all-in1`.`admins_has_events` (
  `admins_admin_id` INT NOT NULL,
  `events_event_id` INT NOT NULL,
  PRIMARY KEY (`admins_admin_id`, `events_event_id`),
  INDEX `fk_admins_has_events_events1_idx` (`events_event_id` ASC) VISIBLE,
  INDEX `fk_admins_has_events_admins1_idx` (`admins_admin_id` ASC) VISIBLE,
  CONSTRAINT `fk_admins_has_events_admins1`
    FOREIGN KEY (`admins_admin_id`)
    REFERENCES `all-in1`.`admins` (`admin_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_admins_has_events_events1`
    FOREIGN KEY (`events_event_id`)
    REFERENCES `all-in1`.`events` (`event_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;



