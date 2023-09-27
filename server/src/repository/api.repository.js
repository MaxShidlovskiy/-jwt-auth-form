const pool = require('../db');

async function registrationUserDB(name, surname, email, password) {
    const client = await pool.connect()
    const sql = `INSERT INTO users (name, surname, email, password)
    VALUES ($1, $2, $3, $4) RETURNING*`
    const result = (await client.query(sql, [name, surname, email, password])).rows
    return result
}

async function getUserByEmailDB(email){
    const client = await pool.connect()
    const sql = 'SELECT * FROM users WHERE email = $1';
    const result  = (await client.query(sql, [email])).rows
    return result;
}


module.exports = {registrationUserDB, getUserByEmailDB}