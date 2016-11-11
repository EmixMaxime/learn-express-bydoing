# La relation OneToMany
Ahh, cette relation est **très très utilisée** ! Alors accrochez-vous *(c'est simple, don't worry!)* <br />
Pour l'illustrer, prenons ma relation entre film et film_screening (film_screening = séance)
![relationship](./img/film-relation.png) <br />
On part de la réalité :
- Un film peu être diffusé dans plusieurs séances différentes <br />
Exemple : Camping 3 peut être diffusé à 14h puis à 16h puis.. jamais #troll <br />
On dit qu'un `film` **hasMany** `film_screening`.
*(la cardinalité est de 1,n de `film` vers `film_screening`)* <br />

## La réalisation : 
Dois-je mettre l'attribut `film_id` dans `film_screening` **ou alors** l'attribut `film_screening_id` dans `film` ? <br />
Pour ne pas parler chinois *(avec la cardinalité)* on part de la logique :
Je dois mettre un attribut `film_id` dans `film_screening` car l'autre proposition ne fonctionne pas :
- Comment mettre plusieurs `film_screening` si j'ai l'attribut `film_screening_id` dans `film` ? <br />
L'autre proposition me donnerai la relation : `film_screening` **hasMany** `film`. **Et ce n'est pas la même chose !** <br />
Ensuite il me suffit d'ajouter la clef étrangère sur ma table `film_screening` et le tour est joué !
