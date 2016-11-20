module.exports = function () {
	return new Env()
}

function Env () {
	const env = process.env.NODE_ENV || 'dev'
	return this[env]
}

Env.prototype.dev = {
	postgres : {
		user: 'emix',
		password: 'emix',
		host: 'localhost',
		database: 'learnnodejs',
	},
	port: 3002,
}

Env.prototype.test = {
	postgres : {
		user: 'emix',
		password: 'emix',
		host: 'localhost',
		database: 'learnnodejs_test',
	},
	port: 3003
}