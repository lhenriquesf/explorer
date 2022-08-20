const AppError = require('../utils/AppError');

class UsersController {
    /*
        index - GET paras listar varios registros
        show - GET para exibir um registro especifico
        create - POST para criar um registro
        update - PUT para atualizar um registro
        delete - DELETE para remover um registro
    */

    create(req, res){
        const {name, email, password} = req.body;

        if(!name){
            throw new AppError('Name is required!');
        }

        res.status(201).json({name, email, password});
    }
}

module.exports = UsersController;
