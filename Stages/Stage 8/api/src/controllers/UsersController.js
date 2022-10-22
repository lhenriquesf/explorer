const { hash, compare } = require('bcryptjs');
const AppError = require('../utils/AppError');

const sqliteConnection = require('../database/sqlite');
const { use } = require('express/lib/router');
// const { use } = require('express/lib/router');
class UsersController {

    async create(req, res){
        const {name, email, password} = req.body;

        const database = await sqliteConnection();
        const checkUserExists = await database.get('SELECT * FROM users WHERE email = (?)', [email]);
        console.log(checkUserExists);

        if(checkUserExists){
            throw new AppError('E-mail ja cadastrado');
        }

        const hashedPassword = await hash(password, 8);

        await database.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);

        return res.status(201).json();
    }
    

    async update(req, res){
        const { name, email, password, old_password } = req.body;
        const { id } = req.params;

        const database = await sqliteConnection();

        const user = await database.get('SELECT * FROM users WHERE id = (?)', [id]);

        if(!user){
            throw new AppError('Usuario nao encontrado!');
        }

        const userWithUpdatedEmail = await database.get('SELECT * FROM users WHERE email = (?)', [email]);

        console.log(userWithUpdatedEmail)
        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
            throw new AppError('E-mail ja cadastrado!');
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password){
            throw new AppError('Precisa informar a senha antiga');
        }

        if(password && old_password){
            const checkOldPassword = await compare(old_password, user.password);

            console.log(checkOldPassword);

            if(!checkOldPassword){
                throw new AppError('A senha antiga nao confere');
            }

            user.password = await hash(password, 8);
        }


        await database.run(
            `UPDATE users SET 
            name = (?), 
            email = (?),
            password = (?),
            updated_at = DATETIME('now', 'localtime'), 
            id = ?`, 
            [user.name, user.email, user.password, id]);

        return res.json();
    }
}

module.exports = UsersController;
