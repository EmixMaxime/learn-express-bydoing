# En action
J'ai normalisé une base de données que vous avez déjà utilisé. Voici le schéma de l'ancienne base : <br />
![old-schema](./img/old-schema.png) <br /> 
Et voici la nouvelle base : <br >
![new-schema](./img/new-schema.png) <br />

## Le DDL
[Voici le DDL.]('./example/creation.sql') <br />
### Remarque :
Vous avez dû voir le type `serial` utilisé pour toutes mes clefs primaire. C'est un type spécial de postgres pour indiquer que la valeur doit être `autoincrement`. <br />
En concrès, vous n'aurez pas besoin d'indiquer un id **(ce qui est d'ailleurs une très mauvaise pratique)**.<br />
Encore une fois je vous ai trouvé un post sur [stackoverflow](http://stackoverflow.com/questions/787722/postgresql-autoincrement) qui explique le type Serial si vous souhaitez avoir plus d'informations. <br />

## Remplissage
Ici j'utilise le format [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values) *(oui pour le coup j'avais pas mieux que wikipédia...). <br />
Pourquoi ? Vous allez vous en rendre compte vous même il est beaucoup plus simple à manipuler. Surtout s'il y a des erreurs un peu partout *(ohh mais c'est des pièges... non des erreurs de frappes!)* <br />
### Comment remplir la bdd ?
[Documentation de la commande COPY](http://devdocs.io/postgresql~9.6/sql-copy)
```sql
COPY student (last_name, first_name, address, city, postcode, phone, birth_date, year, commentary, sex, entry_date) FROM '/path//student.csv' DELIMITER ',' CSV;
COPY module (name, coef) FROM '/path//module.csv' DELIMITER ',' CSV;
COPY subject(name, module_id, coef) FROM '/path//subject.csv' DELIMITER ',' CSV;
COPY teacher (last_name, first_name, function, address, city, postcode, phone, birth_date, start_working) FROM '/path//teacher.csv' DELIMITER ',' CSV;
COPY subject_teacher (year, subject_id, teacher_id) FROM '/path//subject_teacher.csv' DELIMITER ',' CSV;
COPY  exam (description, coef, year, date, subject_id, teacher_id) FROM '/path//exam.csv' DELIMITER ',' CSV;
COPY exam_student(note, exam_id, student_id)  FROM '/path//exam_student.csv' DELIMITER ',' CSV;

```
Si vous regardez les données de notre table `exam` elles ne sont pas cohérente. Je m'en excuse, j'avais la... flemme de les rendres cohérentes. Si quelqu'un a du temps à perdre ;-)

**Attention : ** si vous avez une virgule dans une chaîne de caractère elle sera prise comme séparateur. Si vous devez impérativement avoir des virgules, choisissez un autre `DELIMITER` *(exemple un backslash \ , oui il y a très peu de chance que vos chaînes de caractères contiennent un \ ).*