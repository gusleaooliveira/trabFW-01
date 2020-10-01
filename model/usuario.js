let mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const UsuarioSchema =  new Schema({
    nome: String,
    sobrenome: String,
    email: String,
    senha: String
},{
    versionKey: false
});

module.exports = mongoose.model("Usuario", UsuarioSchema);