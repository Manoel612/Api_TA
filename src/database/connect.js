const mongoose = require("mongoose"); // bilbioteca do mongoDB

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            // URL de conexão com a base de dados no mongoDB
            `mongodb+srv://${process.env.MONGODB_ADMIN}:${process.env.MONGODB_KEY}@manok.4wtsjgb.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log("Conexão realizada");
    } catch (e) {
        console.error("Erro:", e);
    }
};

module.exports = connectToDatabase;