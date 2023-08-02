CREATE TABLE invite(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id),
    invite_id INTEGER REFERENCES subs (invite_id)
 );

CREATE TABLE subs (
    invite_id SERIAL PRIMARY KEY,
     creator_id INTEGER,
    text VARCHAR(255) NOT NULL ,
    upload VARCHAR(3000) NOT NULL,
    rules_id INTEGER,
    date VARCHAR(100),
    status VARCHAR(255) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users (user_id),
    FOREIGN KEY (rules_id) REFERENCES rules (rules_id)
 );

CREATE TABLE rules(
     rules_id SERIAL PRIMARY KEY,
     time INTEGER,
     capacity INTEGER
 );

 CREATE TABLE users (
     user_id SERIAL PRIMARY KEY,
     email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL
 );