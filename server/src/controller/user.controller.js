const express = require('express');
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById} = require('../service/user.service');

const route = express.Router()

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, password } = req.body
        const result = await createUser(name, surname, email, password)
        res.send(result)
    } catch (err) {
        res.send(err.message)
    }
})

route.get('/', async (req, res) => {
    try {
        const result = await getAllUsers()
        res.send(result)
    } catch (err) {
        res.send(err.message)
    }
})

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await getUserById(id)
        res.send(result)
    } catch (err) {
        res.send(err.message)
    }
})

route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, surname, email, password } = req.body
        const result = await updateUserById( name, surname, email, password, id)
        res.send(result)
    } catch (err) {
        res.send(err.message)
    }
})

route.delete('/:id', async (req, res) =>{
    try{
    const {id} = req.params;
    const result = await deleteUserById(id);
    res.send(result)
    }catch(err){
        res.send(err.message)
    }
})

module.exports = {routerUser}