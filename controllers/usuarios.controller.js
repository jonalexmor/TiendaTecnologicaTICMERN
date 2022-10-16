const Usuario = require("../models/usuarios.model");
let response ={
    msg: "",
    exito: false
}
exports.create = function(req,res){
    let usuario = new Usuario({
        username: req.body.username,
        contrasena: req.body.contrasena,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        credito: req.body.credito,
        leasing : req.body.leasing
    })

    usuario.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El usuario se guardó correctamente"
        res.json(response)
    })
}
exports.find = function(req,res){
    Usuario.find(function(err,usuarios){
        res.json(usuarios)
    })
}
exports.findOne = function(req,res){
    Usuario.findOne({_id: req.params.id}, function(err,usuarios){
        res.json(usuarios)
    })
}
exports.update = function(req,res){
    let usuario = {
        username: req.body.username,
        contrasena: req.body.contrasena,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        credito: req.body.credito,
        leasing : req.body.leasing
    }

    Usuario.findByIdAndUpdate(req.params.id, {$set: usuario}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El usuario se modifico correctamente"
        res.json(response)
    })
}
exports.remove = function(req,res){
    Usuario.findByIdAndRemove({_id: req.params.id}, function(err){
    if(err){
        console.error(err), 
        response.exito = false,
        response.msg = "Error al eliminar el usuario"
        res.json(response)
        return;
    }

    response.exito = true,
    response.msg = "El usuario se ha eliminado correctamente"
    res.json(response)
})
}