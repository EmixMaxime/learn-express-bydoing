CREATE TABLE room (
    id SERIAL PRIMARY KEY,
    number varchar(50) UNIQUE NOT NULL,
    places int NOT NULL
);

CREATE TABLE film (
    id SERIAL PRIMARY KEY,
    title varchar(80) UNIQUE NOT NULL,
    description text NOT NULL,
    date_release date NOT NULL,
    date_expire date DEFAULT NULL,
    CHECK (date_expire > date_release)
);

CREATE TABLE price (
    id SERIAL PRIMARY KEY,
    price money NOT NULL
);

CREATE TABLE profile (
    id serial PRIMARY KEY,
    profile varchar(50) NOT NULL,
    price_id int REFERENCES price (id)
);

CREATE TABLE screening (
    id SERIAL PRIMARY KEY,
    hour time UNIQUE NOT NULL
);

CREATE TABLE film_screening (
    id SERIAL PRIMARY KEY,
    film_id int REFERENCES film (id) NOT NULL,
    screening_id int REFERENCES screening (id) NOT NULL,
    room_id int REFERENCES room (id) NOT NULL,
    date date NOT NULL
);

CREATE TABLE sale (
    id SERIAL PRIMARY KEY,
    film_screening_id int REFERENCES film_screening (id) NOT NULL,
    profile_id int REFERENCES profile (id) NOT NULL
);