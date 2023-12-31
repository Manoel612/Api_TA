const mongoose = require("mongoose");

const camposSchema = new mongoose.Schema({ // criação de (Schema) => estrutura de dados do documento
    txtComida: {
        type: String, // tipo
        required:true, // obrigatorio
        minLength:3,
        maxLength:400,
    },
    txtSent: {
        type: String,
        required:true,
        minLength:3,
        maxLength:400,
    },
    gato: {
        type: String,
        required:true,
    },
});

const postModel = mongoose.model("posts", camposSchema); // passa o schema para o mongoDB com o nome

module.exports = postModel;