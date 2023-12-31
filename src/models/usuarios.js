const mongoose = require("mongoose");

const camposSchema = new mongoose.Schema({ // criação de (Schema) => estrutura de dados do documento
    usuario: {
        type: String, // tipo
        required:true, // obrigatorio
        minLength:3,
        maxLength:12
    },
    email: {
        type: String,
        required:true,
    },
    senha: {
        type: String,
        required:true,
        minLength:8,
        maxLength:12
    },
    
});

const usuarioModel = mongoose.model("usuarios", camposSchema); // passa o schema para o mongoDB com o nome

module.exports = usuarioModel;