# Présentation

Cette partie du Wiki est destinée aux étudiants de première année en DUT Informatique à l'IUT de Calais.
La présentation porte ici non pas sur le code, mais sur **la base de données**. <br />
A travers ce wiki je vais vous présenter des outils plutôt cool, très très cool même! Descendez la page, je vous présente heroku, une alternative pour **avoir postgres sur windows**. Je vous explique clairement les associations entre tables ect, avec un exemple concrès :-) <br />
Laissez-vous guider, j'ai résumé un maximum les choses compliquées afin qu'elles deviennent simples, j'ai utilisé un cobaye pour m'en assurer. <br />
Bonne lecture chef! <br />
**Si vous avez la moindre question, n'hésitez pas !**.

# Navigation :
*(à lire dans l'ordre sinon... vous allez être encore plus perdu)*
- [Présentation](./presentation.md)
- [Voir les nouvelles conventions](./normalizations.md)
- [Relationships](./relationship)
- [Exemple : nouvelle base VS ancienne base](./normalizations-exemple.md) (Vous êtes sceptique? cette partie va vous convaincre!)

# Des outils pratique !
## [Vertabelo](https://www.vertabelo.com/)
Vertabelo est un outil en ligne **gratuit** qui vous propose de schématiser vos bases de données (création d'entités avec leurs attributs).
Ne soyez pas surpris, les schémas ne sont pas les mêmes que ceux étudiés en cours. Si vous doutez de la conformité de ceux-ci, il vous suffit d'une simple recherche google : **"database modelling normalization"** pour vous retirer ces doutes.
<br />
Il n'y a qu'en réalité la modélisation de la cardinalité qui change pour être plus visuel : d'un coup d'oeil on peut reconnaître si c'est une relation oneToOne ou OneToMany. *(allez voir le guide sur les relations !)*

Quelques fonctionnalités cool :
- Modéliser une base de données, puis récupérer le DDL (je vous conseil tout de même de vérifier le DDL il peut y avoir des surprises parfois...)
- Importer un fichier SQL (contenant le DDL) pour générer le schéma.
- Travailler à plusieurs.
- Parler directement sur le site pour s'aider (peu utilisé, vive Facebook Discord... mais ça peut être utile).

Si vous souhaitez vous créer un compte pour les étudiants **c'est gratuit**. Il vous suffit de suivre les instructions (en anglais).

## Heroku
Vous êtes sur windows ? Vous souhaitez tout de même utiliser postgres ? Cette solution est faite pour vous !<br />
Heroku est un cloud qui permet d'héberger des instances d'applications. Je parle chinois? Vous allez pouvoir **avoir votre propre serveur SQL en ligne** (postgresql ou mysql...). Ce qui est plutôt cool? C'est **gratuit** *(512mb de ram, mais pour une instance de postgresql ? ça suffit !)*.
<br />
- Créez-vous un compte sur leur [site](https://heroku.com).
- Installez leur CLI, suivez les [instructions](https://devcenter.heroku.com/articles/heroku-command-line).
- Connectez-vous : `heroku login` dans un terminal.
- Créez votre database : `heroku addons:create heroku-postgresql --app nomDeVotreApp`
- Connectez-vous à votre base : `heroku pg:psql --app nomDeVotreApp`<br />
## Exemple :
Voici la connexion à ma base en vérifiant qu'elle est bien active. *(oui j'ai une autre base sur une autre application, mais c'est secret défense chef!)* <br />
![heroku](./img/heroku-database.png) <br />
Bien-sûr cette plateforme vous permet de faire beaucoup d'autres choses *(applications php, nodejs, ruby... :o)*.

# Cmder : un terminal pour windows
Sur windows le terminal est juste horrible. Je vous conseil [Cmder](http://cmder.net/) qui est bien plus élégant. (très simple à installer).
