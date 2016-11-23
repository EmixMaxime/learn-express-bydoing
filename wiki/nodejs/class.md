# this is not defined
erreur rencontrée :
``` javasript
class FilmController extends Controller {

	constructor () {
		console.log('THIS = ', this) // not defined ! (throw error)
	}
}
```
Il ne faut pas oublier d'appeler le constructeur parent.
``` javascript
class FilmController extends Controller {

	constructor () {
		super()
		console.log('THIS = ', this)
	}
}
```