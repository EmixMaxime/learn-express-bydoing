# Todo list :
## Important : 
- Gérer mes variables d'environnement
- Debugger mes tests pour trouver d'où vient le blocage (après le seed de la base il y a 10 secondes de blocage...)
- Revoir la partie migration qui est pour le moment foireuse

## En cours :
- Gestion du bug sur le module seedDatabase.js.
Lorsque j'ai terminé d'insérer mes données il faut que je libère le Pool (`pool.end()`) mais comment savoir lorsque c'est terminé vu que je travail en asynchrone ?
<br />
C'est ce que j'ai "bidouiller" sur [ce commit](caea7f29ab845f9a4cff4df5bcc36106707fa3c0).
<br />
Petit problème : le pool est fermé plusieurs fois, car il y a plusiurs tables à gérer. <br />
Je ne souhaite pas utiliser de Promises ou la "fonctionnalité" async/await *(qui utilise derrière les Promises)*.

<br />

## Moins important :

<br />

# Learn-nodejs-bydoing
Lorsque je souhaite apprendre une nouvelle technologie je créé un nouveau projet, portant sur le monde réel.
Actuellement j'apprend nodeJS avec ExpressJS il me fallait un nouveau projet, ayant vu un cinéma... *(ehh oui, l'inspiration viens de loin!)*. <br />

## Avancement : ~ 30%