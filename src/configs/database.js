const mongoose = require('mongoose')
const dotEnv = require('dotenv') 

dotEnv.config()
const MONGO_URI = process.env.MONGO_URI

const connect = () => {
  mongoose.connect(MONGO_URI,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  const connection = mongoose.connection
  connection.on('error', () => console.error('Erro ao se conectar!'))
  connection.once('open', () => console.log('Estamos conectadas!'))
}

module.exports = {connect}