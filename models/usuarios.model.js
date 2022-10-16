const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    username:{type: String, required: true, max:60},
    contrasena:{type: String, required: true, max:40},
    nombre:{type: String, required: true, max:40},
    apellidos:{type: String, required: true, max:15},
    email:{type: String, required: false, max:70},
    credito:{type: String, required: false, max:70},
    leasing:{type: String, required: false, max:150}
});

module.exports = mongoose.model("usuarios", UsuariosSchema);