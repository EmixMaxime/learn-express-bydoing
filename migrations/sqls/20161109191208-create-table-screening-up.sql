CREATE TABLE screening (
    id SERIAL PRIMARY KEY,
    hour time UNIQUE NOT NULL
);