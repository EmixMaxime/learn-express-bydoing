process.env.PORT = process.env.PORT || 3000
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'dev') {
	process.env.DATABASE_USER = process.env.DATABASE_USER  || 'emix'
	process.env.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'emix'
	process.env.DATABASE = process.env.DATABASE || 'learnnodejs'
}
