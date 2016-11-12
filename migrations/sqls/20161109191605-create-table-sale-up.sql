CREATE TABLE sale (
    id SERIAL PRIMARY KEY,
    film_screening_id int REFERENCES film_screening (id) NOT NULL,
    profile_id int REFERENCES profile (id) NOT NULL
);