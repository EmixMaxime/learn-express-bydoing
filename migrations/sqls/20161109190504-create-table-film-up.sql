CREATE TABLE film (
    id SERIAL PRIMARY KEY,
    title varchar(80) UNIQUE NOT NULL,
    description text NOT NULL,
    date_release date NOT NULL,
    date_expire date DEFAULT NULL,
    CHECK (date_expire > date_release)
);