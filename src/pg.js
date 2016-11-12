const pg = require('pg')

process.env.DATABASE_USER = process.env.DATABASE_USER  || 'emix'
process.env.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'emix'
process.env.DATABASE = process.env.DATABASE || 'learnnodejs'

const config = {
    user: process.env.DATABASE_USER, //env var: PGUSER
    database: process.env.DATABASE, //env var: PGDATABASE
    password: process.env.DATABASE_PASSWORD, //env var: PGPASSWORD
    host: 'localhost', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}
//this initializes a connection pool
//it will keep idle connections open for a 30 seconds
//and set a limit of maximum 10 idle clients
let pool
try {
	console.log('DATABASE CONFIGURATIONS', process.env.PORT)
	pool = new pg.Pool(config)
} catch (error) {
	console.log('Erreur lors de la connexion à la bdd : ', error)
}
module.exports = pool

/* Proxy for my raspberry */
// const ssh2 = require('ssh2')
// var pgHost = 'localhost', // remote hostname/ip
//     pgPort = 5432,
//     proxyPort = 9090,
//     ready = false;
//
// const proxy = require('net').createServer(function(sock) {
//     if (!ready) return sock.destroy();
//
//     c.forwardOut(sock.remoteAddress, sock.remotePort, pgHost, pgPort, (err, stream) => {
//         if (err) return sock.destroy();
//         sock.pipe(stream);
//         stream.pipe(sock);
//     })
// })
// proxy.listen(proxyPort, '127.0.0.1');
//
// const c = new ssh2()
// c.connect({
//     host : '192.168.1.66',
//     port : 22,
//     username : 'pi',
//     password: 'raspberry'
//     // privateKey : require('fs').readFileSync('./ssh_keys/my_key')
// })
// c.on('connect', function() {
//     console.log('Connection :: connect');
// })
//
// var clientObject = {}
//
//  c.on('ready', function () {
//     ready = true
//     const config = {
//         user: 'emix', //env var: PGUSER
//         database: 'learnnodejs', //env var: PGDATABASE
//         password: 'emix', //env var: PGPASSWORD
//         host: 'localhost', // Server hosting the postgres database
//         port: proxyPort, //env var: PGPORT
//         max: 10, // max number of clients in the pool
//         idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
//     }
//     // const conString = 'postgres://emix:emix@127.0.0.1:' + proxyPort + '/postgres'
//     const client = new pg.Pool(config)
//  })

// https://github.com/mscdex/ssh2/issues/67