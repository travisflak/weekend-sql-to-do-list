const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
    database: process.env.DATABASE_NAME || 'weekend-to-do-app', //name of the database 'weekend-to-do-app' goes here
    host: 'localhost',
    port: 5432,
    max: 10, 
    idleTimeoutMillis: 30000 
});

pool.on('connect', () => {
    console.log("Postgresql Connected");
} );

pool.on('error', (error) => {
    console.log("error with Postgresl pool", error);
});

module.exports = pool;