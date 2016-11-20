# Cache
[Documentation parlant du cache des modules.](https://nodejs.org/api/modules.html#modules_caching) <br />
Le design pattern Singleton est donc inutile avec nodejs. <br />
Exemple :

```javascript
// module.js
console.log('Call module.js')
module.exports = {
	random: Math.random(), 
	sayHello () {
		console.log('Hello world :', this.random)
	}
}
// test.js
const module = require('./module.js')
const module2 = require('./module.js')

// -> "Call module.js"

module.sayHello() // Hello world : 0.7363827549901192
module2.sayHello() // Hello world : 0.7363827549901192
```

Lorsqu'on export un objet, celui-ci est directement "caché". <br />
Mais alors, comment faire pour éviter ce cache ? <br />
La documentation nous indique de retourner une fonction, exemple :

```javascript
// module.js
console.log('Call module.js ')
module.exports = function () {
	return {
		random: Math.random(), 
		sayHello () {
			console.log('Hello world :', this.random)
		}
	}
}
// test.js
const module = require('./module.js')()
const module2 = require('./module.js')()

// -> "Call module.js"

module.sayHello() // Hello world : 0.7363827549901192
module2.sayHello() // Hello world : 0.0397066188409676
```