const dotenv = require("dotenv"); // guarda em variaveis externas: as senhas e adms

const connectToDatabase = require("./src/database/connect.js"); // arquivo que conecta com o mongodb

dotenv.config(); // configura o .env

connectToDatabase(); // roda a conexão

require("./servers/express"); // executa o servidor