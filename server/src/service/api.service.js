const { registrationDB, getUserByEmailDB } = require ('../repository/api.repository')
import bcrypt from 'bcrypt';

async function registration(name, surname, email, pwd) {
    const salt = 3;
    const pwd_hashed = await bcrypt.hash(pwd, salt);
    const result = await registrationDB(name, surname, email, pwd_hashed);
    return result;
}

async function authorization(email, pwd) {
    const userFound = await getUserByEmailDB(email);
    if (!userFound.length) throw new Error(`юзера c таким email не существует`);
    const isMatch = await bcrypt.compare(pwd, userFound[0].pwd);
    if (!isMatch) throw new Error('пароли не совпадают');
    return userFound
};


export { registration, authorization }