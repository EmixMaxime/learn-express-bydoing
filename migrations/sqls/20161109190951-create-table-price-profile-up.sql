CREATE TABLE price_profile (
    id SERIAL PRIMARY KEY,
    profile_id REFERENCES profile (id) NOT NULL,
    price_id int REFERENCES price (id) NOT NULL
);
