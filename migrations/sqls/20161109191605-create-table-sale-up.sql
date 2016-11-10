CREATE TABLE sale (
    id SERIAL PRIMARY KEY,
    film_screening_id int REFERENCES film_screening (id) NOT NULL,
    price_profile_id int REFERENCES price_profile (id) NOT NULL
);