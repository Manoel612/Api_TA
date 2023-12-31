const yup = require("yup");

const usuariosPost = yup.object({
        usuario: yup.string().min(3, "minimo de caracteres de 3").max(12, "limite de caracteres de 12").required("campo obrigatorio"),
        senha: yup.string().min(8, "minimo de caracteres de 8").max(12, "limite de caracteres de 12").required("campo obrigatorio"),
        email: yup.string().required("campo obrigatorio").email("não correspode a email"),
    
});

const usuariosGet = yup.object({
    body: yup.object({
        usuario: yup.string().min(3).max(12).required(),
        senha: yup.string().min(8).max(12).required(),
        email: yup.string().email().required(),
    })
});

module.exports = {usuariosPost, usuariosGet};