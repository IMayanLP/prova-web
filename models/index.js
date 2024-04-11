const mongoose = require('mongoose')
const Food = require('./food.model')
const config = require('../config/db.config')

mongoose.connect(`mongodb+srv://${config.USER}:${config.PASS}@provadb.57kjfho.mongodb.net/`).then(() => {
    console.log('conectou')
}).catch((err) => console.log(`deu ruim: ${err}`))

module.exports = {
    Food,
    mongoose
}