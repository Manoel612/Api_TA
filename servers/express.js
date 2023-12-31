const express = require("express"); // biblioteca de servidor
const cors = require("cors"); // permite que um servidor externo interaja com este 
const app = express(); // instanciando express
const port = 3000; // porta em que a app rodara

app.use(express.json()); // express usar json
app.use(cors()); // a app usara o cors

const normalizedPath = require("path").join(__dirname, "routes");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    app.use("/",require("./routes/" + file));
});

app.listen(port, () => console.log(`rodando na porta ${port}`)); // roda o servidor na porta
