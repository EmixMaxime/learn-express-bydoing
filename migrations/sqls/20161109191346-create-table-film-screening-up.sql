CREATE TABLE film_screening (
    id SERIAL PRIMARY KEY,
    film_id int REFERENCES film (id) NOT NULL,
    screening_id int REFERENCES screening (id) NOT NULL,
    room_id int REFERENCES room (id) NOT NULL,
    date date NOT NULL
);