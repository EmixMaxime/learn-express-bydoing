CREATE TABLE price_profile (
    id SERIAL PRIMARY KEY,
    profile varchar(255) NOT NULL,
    price_id int REFERENCES price (id) NOT NULL
);
