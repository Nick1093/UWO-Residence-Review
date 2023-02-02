CREATE DATABASE Review-Residences;

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    building TEXT,
    rating INTEGER,
    title TEXT,
    content TEXT,
    created_on TIMESTAMP
);


CREATE TABLE accounts (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
    created_on TIMESTAMP NOT NULL
);
