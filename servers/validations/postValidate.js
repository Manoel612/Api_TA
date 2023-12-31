const yup = require("yup");

const postePost = yup.object({
        txtComida: yup.string().min(3, "minimo de caracteres de 3").max(400, "limite de caracteres de 400").required("campo obrigatorio"),
        txtSent: yup.string().min(3, "minimo de caracteres de 3").max(400, "limite de caracteres de 400").required("campo obrigatorio"),
        gato: yup.string().url("url").required("foto não carregada"),
});

const posteGet = yup.object({
        limit: yup.number().required(),
        page: yup.number().required(),
});

module.exports = {postePost, posteGet};