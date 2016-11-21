# Navigation :
- [Relationships](./relationship)

# Parlons de normes / conventions
Le monde informatique évolue de plus en plus vite, les applications deviennent de plus en plus compliquées. <br />
Il faut alors des normes pour aider les développeurs. Lorsque vous chercherez de l'aide sur Internet vous les trouverez toujours avec ces normes, sauf si les sujets datent d'une dizaine d'annéee. <br />
C'est beaucoup plus simple de passer d'une application à une autre si celles-ci suivent des normes. <br />
Bien sûr, tous les développeurs ne sont pas d'accord sur les normes (exemple en CSS avec les conventions BEM mais encore OOCSS), mais sur les bases de données elles se ressemblent très fortement. <br />
Par exemple, certains développeurs mettre leur nom de table au pluriel (films, rooms...) donc mettent également le préfixe des clefs étrangères au pluriel (films_id, rooms_id)
d'autres au singulier (dont moi).

## Les attributs
Il n'y a pas de normes fixes pour les attributs. Maix ceux-ci doivent voir des noms cohérents avec leur contenu. <br />

Premièrement, revenons sur les attributs vus en cours, du type : nometu, prenometu, sexetu *(issus du tp4)*. sont les exemples parfait de ce qu'il **ne faut pas faire.** <br />

Nous ne sommes absolument pas obligés de préfixer ou de suffixer nos attributs avec le nom de la table. D'ailleurs peu de développeurs le font. <br />
Pourquoi? Car ça peut devenir très vite **répétitif** et source d'erreurs ! Imaginez ma table `film_screening` avec les attributs comme ceux-ci : <br />
`idfilm_screening` `film_id_film_screening` `room_id_film_screening` `screening_id_film_screening` `date_film_screening` <br />
J'espère vous avoir convaincu que cette convention est très très verbeuse. *(et encore ici, tout est espacé d'un _ imaginez comme les tp tout collé ? ;-))* <br />
"Il faut savoir clairement de quoi l'on parle" <br />
Oui, mais même sans cette convention on sait de quoi l'on parle... Exemple : 
```SQL
SELECT film.title FROM film
INNER JOIN film_screening FS ON film.id = FS.film_id
```
Vous avez devinez d'où venez title? d'où venez film_id ? Ehh oui c'est logique ! <br />
C'est de même en programmation, vous devez toujours utiliser des noms de variables cohérents, exemple (javascript) :
```javascript
const films = db.query('SELECT * FROM film') // Exemple pour accéder à un film (simplifié) : films.title ...
```
Et alors... les noms d'attributs avec les noms des tables sont encore une fois là juste pour nous faire ... :-) <br />
Imaginnez :
```javascript
films.titlefilm
films.descriptionfilm
```
J'espère vous avoir convaincu que cette convention **ne servait à rien, mis à part polluer vos requêtes et être source d'erreurs.** <br />
Source d'erreurs ? Oui, exemple d'un tp : `anneetu`, lorsque vous allez écrire une requête avec ce nom d'attribut... *Un "e" ? Deux "e"? Trois "e"?...* 
Je pourrais bien sûr donner beaucoup plus d'exemples qui sont source d'erreurs... `nummode`.
<br />
Si vous travaillez un jour sur une base de données reprennant cette convention vous aurez beaucoup plus de chances de trouvez des attributs de ce style : `film_title` ou alors `title_film` qui sont tout de même bien plus **lisibles** que `filmtitle` ou encore `titlefilm`.
