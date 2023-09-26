const {createUserDB,getAllUsersDB, getUserByIdDB, updateUserByIdDB, deleteUserByIdDB, getUserByEmailDB} = require("../repository/repository")
const bcrypt = require('bcrypt');
const salt = 3;

async function createUser(name, surname, email, password) {
    const foundUser = await getUserByEmailDB(email)
    if (foundUser.length) throw new Error('такой пользователь уже есть')
    const hashPassword = await bcrypt.hash(password, salt)
    const result = await createUserDB(name, surname, email, hashPassword);
    return result;
}

async function getAllUsers() {
    const data = await getAllUsersDB();
    return data
}

async function getUserById(id) {
    const data = await getUserByIdDB(id);
    if (!data.length) throw new Error(`такого ид нет`);
    return data;
}

async function createUser(name, surname, email, pwd) {
    const data = await createUserDB(name, surname, email, pwd);
    if (!data) throw new Error(`empty user`)
    return data;
}

async function updateUserById(id, name, surname, email, pwd) {
    const data = await updateUserByIdDB(id, name, surname, email, pwd);
    if (!data.length) throw new Error(`no such id to update`);
    return data;
}

async function deleteUserById(id){
    const data = await deleteUserByIdDB(id);
    if (!data.length) throw new Error(`no such id to delete`);
    return data;
}

export { getAllUsers, getUserById, createUser, updateUserById, deleteUserById }