const maequecoda = require('../models/maesquecodamModels')

const getAll = async(req, res) => {
    const { nome, profissao, linkedin } = req.query
    
    const filters = {}

    if (nome) {
        filters.nome = nome
    }

    if (profissao) {
        filters.profissao = profissao
    }

    if (linkedin) {
        filters.linkedin = linkedin
    }

    const maes = await maequecoda.find(filters)
    return res.status(200).send(maes)
}

const get = async (req, res) => {
    try {
        const { id } = req.params

        const maes = await maequecoda.findById(id)

        return res.status(200).send(maes)
    } catch (error) {
        return res.status(404).send({ message: 'Não localizei resultados para sua pesquisa' })
    }
}

const create = async (req, res) => {
    try {
        const maes = await maequecoda.create(req.body)
        return res.status(201).send(maes)
    } catch (error){
        return res.status(400).send({message: error.message})
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const update = {new: true}

        const maes = await maequecoda.findByIdAndUpdate(id, body, update)
        return res.status(200).send(maes)
    } catch (error) {
        return res.status(404).send({message: 'Não localizei resultados para sua pesquisa'})
    }
}

const remove = async (req, res) => {
    try {
        const { id } = req.params

        await maequecoda.findByIdAndDelete(id)

        return res.status(204).send( { message: 'Dados apagados com sucesso' })
    } catch (error) {
        return res.status(404).send({ json: 'Não localizei resultados para sua pesquisa' })
    }
}



module.exports = {
    getAll,
    get,
    create,
    update,
    remove,
    
}
