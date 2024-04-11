const {
    getAllFoods,
    getFoodById,
    insertFood,
    updateFood,
    deleteFoodById
} = require('../services/food.service')

getAllFoodsController = async (req, res) => {
    try {
        await getAllFoods().then((data) => {
            if (!data) return res.status(404).json({ message: 'Nenhum alimento encontrado...' })

            return res.json(data)
        }).catch((err) => {
            return res.status(500).json(err)
        })
    } catch (err) {
        return res.status(500).json(err)
    }
}

getFoodByIdController = async (req, res) => {
    try {
        await getFoodById(req.params.id)
            .then((data) => {
                if (!data) return res.status(404).json({ message: 'O alimento especificado não existe. :(' })

                return res.json(data)
            })
            .catch((err) => {
                return res.status(500).json(err)
            })

    } catch (err) {
        return res.status(500).json(err)
    }
}

insertFoodController = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            category: req.body.category,
            quantity: req.body.quantity,
            expirationDate: req.body.expirationDate,
            price: req.body.price
        }

        await insertFood(data)
            .then((newFood) => {
                return res.json(newFood)
            })
            .catch((err) => {
                return res.status(500).json(err)
            })
    } catch (err) {
        return res.status(500).json(err)
    }
}

updateFoodController = async (req, res) => {
    try {
        const data = {
            name: req.body.name || undefined,
            category: req.body.category || undefined,
            quantity: req.body.quantity || undefined,
            expirationDate: req.body.expirationDate || undefined,
            price: req.body.price || undefined
        }

        await updateFood(req.params.id.toString(), data).then((data) => {
            if (!data) return res.status(404).json({ message: 'Esse alimento n existe não po.' })

            return res.json({ message: 'Alimento atualizado!' })
        })
    } catch (err) {
        return res.status(500).json(err)
    }
}

deleteFoodByIdController = async (req, res) => {
    try {
        await deleteFoodById(req.params.id)
            .then((data) => {
                if (!data) return res.status(404).json({ message: 'Alimento não encontrado.' })

                return res.json({ message: 'Alimento excluído com sucesso.' })
            }).catch((err) => {
                return res.status(500).json(err)
            })
    } catch (err) {
        return res.status(500).json(err)
    }
}

module.exports = {
    getAllFoodsController,
    getFoodByIdController,
    deleteFoodByIdController,
    insertFoodController,
    updateFoodController
}