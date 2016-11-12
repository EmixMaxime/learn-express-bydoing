CREATE TABLE profile (
    id serial PRIMARY KEY,
    profile varchar(50) NOT NULL,
    price_id int REFERENCES price (id)
);