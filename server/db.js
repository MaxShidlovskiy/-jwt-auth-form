const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database:'jwt-authform',
    port: '5432',
    password:'3131718z',
})

export default pool;