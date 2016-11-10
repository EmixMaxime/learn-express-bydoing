CREATE TABLE film
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT
);

CREATE TABLE price
(
    id SERIAL PRIMARY KEY,
    price MONEY
);

CREATE TABLE price_profile
(
    id SERIAL PRIMARY KEY,
    profile VARCHAR(255) [],
    price_id INTEGER,
    CONSTRAINT price_profile_price_id_fkey FOREIGN KEY (price_id) REFERENCES price (id)
);

CREATE TABLE room
(
    id SERIAL PRIMARY KEY,
    number VARCHAR(50),
    places INTEGER
);
CREATE UNIQUE INDEX room_number_key ON room (number);
CREATE TABLE screening
(
    id INTEGER PRIMARY KEY NOT NULL,
    hour TIME
);
CREATE UNIQUE INDEX screening_hour_key ON screening (hour);

CREATE TABLE film_screening
(
  id SERIAL PRIMARY KEY,
    film_id INTEGER,
    screening_id INTEGER,
    room_id INTEGER,
    date DATE,
    CONSTRAINT film_screening_film_id_fkey FOREIGN KEY (film_id) REFERENCES film (id),
    CONSTRAINT film_screening_screening_id_fkey FOREIGN KEY (screening_id) REFERENCES screening (id),
    CONSTRAINT film_screening_room_id_fkey FOREIGN KEY (room_id) REFERENCES room (id)
);

CREATE TABLE sale
(
    id SERIAL PRIMARY KEY,
    film_screening_id INTEGER,
    price_profile_id INTEGER,
    CONSTRAINT sale_film_screening_id_fkey FOREIGN KEY (film_screening_id) REFERENCES film_screening (id)
);