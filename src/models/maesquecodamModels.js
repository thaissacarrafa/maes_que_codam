const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MaesQueCodam = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    }, 
    profissao: {
        type: String,
        required: true
    },
        cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 2,
        maxlength: 2
    },

    virtude: {
        type: String,
        required: false
    },

    linkedin: {
        type: String,
        required: false
    },
})

const maequecoda = mongoose.model('maequecoda', MaesQueCodam)

module.exports = maequecoda