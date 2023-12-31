const usuarioModel = require("../../src/models/usuarios.js");
const {usuariosPost} = require("../validations/userValidate");

const bcrypt = require('bcrypt');
const express = require("express");
const router = express.Router();

const routerName = "/usuarios";

router.post(routerName + "/registro", async (req, res) => {
    
    const {usuario, email, senha, confirmSenha} = req.body;

    try{
        if( senha != confirmSenha) throw 'confirmação invalida';

        const emailExist = await usuarioModel.findOne({email: email});
        const userExist = await usuarioModel.findOne({usuario: usuario});

        if(emailExist || userExist) throw 'email ou usuario já existe';
        
    } catch(err) {
        return res.status(422).json({msg:err });
    }

    const salt = await bcrypt.genSalt(12);
    const hashSenha = await bcrypt.hash(senha, salt)
    const userData = {
        usuario: usuario, 
        email: email, 
        senha: hashSenha,
    }

    try{
        await usuariosPost.validate(userData);
        res.status(201).json({msg: "validação realizada"});
        
    } catch (err) {
        return res.status(422).json({msg: err});
    }
    
    try {
        const users = await usuarioModel.create(userData);
        res.status(201).json(users);
        
    } catch (err) {
          return res.status(500).json({msg: err});
      }
});

router.post(routerName + "/login", async (req, res) => {
    
    const { email, senha } = req.body;

    try{
        const emailExist = await usuarioModel.findOne({email: email});

        if(!emailExist) throw 'email não registrado';
        
        const validate = await bcrypt.compare( senha, userData.senha);
    
        if(!validate) throw "senha incorreta";
    } catch(err) {
        return res.status(422).json({msg:err });
    }
});

module.exports = router; 