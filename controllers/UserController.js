const User = require('../models/User')

function create(req, res){
    var user = new User();
    var params = req.body;

    user.firstName = params.firstName;
    user.lastName = params.lastName;
    user.email = params.email;
    user.age = params.age;

    user.save((error, userCreated)=>{
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{
            if(!userCreated){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el usuario"
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario almacenado correctamente",
                    dataUser: userCreated
                })
            }
        }
    })
}

function modify(req, res){
    var idUser = req.params.id;
    var nuevoDatoEstudiante = req.body;

    User.findByIdAndUpdate(idUser,nuevoDatoEstudiante,(error, modifiedStudent)=>{
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{
            if(!modifiedStudent){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al modificar el usuario"
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario modificado correctamente",
                    dataUser: nuevoDatoEstudiante
                })
            }
        }
    })

}

function viewList(req,res){
    User.find((error, listUser)=>{
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{
            if(!listUser){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al mostrar los usuarios"
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "lista de usuarios mostrada correctamente",
                    dataUser: listUser
                })
            }
        }
    })


}

function deleteUser (req, res) {
    var idUser = req.params.id;

    User.findByIdAndDelete(idUser,(error, deleteStudent)=>{
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{
            if(!deleteStudent){
                res.status(404).send({
                    statusCode: 404,
                    message: "Error al eliminar el usuario"
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario eliminado correctamente",
                    dataUser: deleteStudent
                })
            }
        }
            
    })
}

module.exports = {
    create,
    modify,
    viewList,
    deleteUser
}