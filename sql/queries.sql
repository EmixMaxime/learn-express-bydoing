-- ALTER TABLE film_screening ADD FOREIGN KEY(screening_id) REFERENCES screening(id);
-- ALTER TABLE screening ADD PRIMARY KEY (id);
-- ALTER TABLE screening ADD CONSTRAINT screening_pk PRIMARY KEY(id);
-- ALTER TABLE film_screening ADD CONSTRAINT lol FOREIGN KEY(screening_id) REFERENCES screening(id);

SELECT FS.id AS film_id, R.places AS placesBase,
  R.places - (SELECT COUNT(*) FROM sale WHERE film_screening_id = 1) as restPlaces
FROM film_screening FS
INNER JOIN room R ON R.id = FS.room_id
;

SELECT P.price, PP.profile from price_profile PP
INNER JOIN price P
  ON P.id = PP.price_id
WHERE profile IN('{adult}')
;

SELECT F.title, R.number, S.hour,
R.places - (SELECT COUNT(*) FROM sale WHERE film_screening_id = 1) as restPlaces,
S.hour::TIME - NOW()::TIME AS start
  FROM film_screening FS
  INNER JOIN screening S
    ON S.id = FS.screening_id
  INNER JOIN film F
    ON F.id = FS.film_id
  INNER JOIN room R
    ON R.id = FS.room_id
  WHERE S.hour > NOW()::TIME
;

/* Je veux le CA dégagé par film !! */
SELECT SUM(P.price), F.title FROM sale S
  /* Je prends le tarif */
  INNER JOIN price_profile PP
    ON PP.id = S.price_profile_id
  INNER JOIN price P
    ON P.id = PP.price_id

  /* Je prends le film vendu */
  INNER JOIN film_screening FS
    ON FS.id = S.film_screening_id
  INNER JOIN film F
    ON F.id = FS.film_id
  GROUP BY F.title
;