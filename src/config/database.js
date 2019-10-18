const mongoose = require('mongoose')

module.exports = async() => {
    try{
        await mongoose.connect(process.env.STRING_URL,{
            useNewUrlParser:true,
            useNewUrlParser:true,
            useFindAndModify:true,
            useUnifiedTopology:true
        });
        console.log("Conectado com sucesso!")
    } catch{
        console.log("Ocorreu um erro: " + error)
    }
}