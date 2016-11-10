CREATE TABLE room (
    id SERIAL PRIMARY KEY,
    number varchar(50) UNIQUE NOT NULL,
    places int NOT NULL
);