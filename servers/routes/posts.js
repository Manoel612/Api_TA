const postModel = require("../../src/models/posts.js"); // modelo de dados guardados na data
const {postePost, posteGet} = require("../validations/postValidate.js")

const express = require("express"); 
const router = express.Router();
const routerName = "/posts";

/* get: pega o json da data */
router.get(routerName, async (req, res) => {
    const {limit, page} = req.query;
    const posteData = {
        limit: limit,
        page: page
    }
    try{
        await posteGet.validate(posteData);
    } catch (err) {
        return res.status(422).json({msg: err});
    }
    
    try {
        const skipValue = (page - 1) * limit;      
        const exe = await postModel.find() // pegar os dados
        .sort({_id:-1}) // ordenando
        .skip(skipValue) // pulando uma quantidade
        .limit(posteData.limit); // ate certa quantia alem do skip
        res.status(200).json(exe);
    } catch (e) {
        return res.status(503).send(e);
    }
    
});

router.get("/posts/teste", async (req,res) => {
    return res.status(200).json("Teste");
})

/* post: cria o json na data ou edita */
router.post(routerName, async (req, res) => {
    try {
        await postePost.validate(req.body);
        res.status(201).json({msg: "validação realizada"});
    } catch (err) {
        return res.status(422).json({msg: err});
    }

    try {
        const exe = await postModel.create(req.body);
        res.status(201).json(exe); 
    } catch (e) {
        console.log(e);
        res.status(500).send("erro no servidor"); 
    }
});

module.exports = router; 