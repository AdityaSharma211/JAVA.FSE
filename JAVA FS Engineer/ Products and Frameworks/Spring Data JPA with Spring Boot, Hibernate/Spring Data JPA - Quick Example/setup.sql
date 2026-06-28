
CREATE SCHEMA IF NOT EXISTS ormlearn;

USE ormlearn;

CREATE TABLE IF NOT EXISTS country (
    co_code VARCHAR(2)  PRIMARY KEY,
    co_name VARCHAR(50) NOT NULL
);

INSERT INTO country VALUES ('IN', 'India');
INSERT INTO country VALUES ('US', 'United States of America');
INSERT INTO country VALUES ('GB', 'United Kingdom');
INSERT INTO country VALUES ('AU', 'Australia');
INSERT INTO country VALUES ('CA', 'Canada');

SELECT * FROM country;
