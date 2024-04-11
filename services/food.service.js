const { Food } = require('../models/index')

const getAllFoods = async () => {
    try {
        const res = await Food.find()

        return res
    } catch (err) {
        throw new err(err)
    }
}

const getFoodById = async (id) => {
    try {
        const food = await Food.findById(id)

        return food
    } catch (err) {
        throw new err(err)
    }
}

const insertFood = async (data) => {
    const food = new Food(data)
    await food.save().then((res) => {
        return res
    }).catch((err) => {
        throw new err(err)
    })

    return food
}

const updateFood = async (id, data) => {
    try {
        const newData = {
            name: data.name || undefined,
            category: data.category || undefined,
            quantity: data.quantity || undefined,
            expirationDate: data.expirationDate || undefined,
            price: data.price || undefined,
        }

        const food = await Food.updateOne(
            { _id: id },
            { $set: newData }
        )

        return food
    } catch (err) {
        throw new err(err)
    }
}

const deleteFoodById = async (id) => {
    await Food.findByIdAndDelete(id)
        .then((res) => {
            return res
        })
        .catch((err) => {
            throw new err(err)
        })
}

module.exports = {
    getAllFoods,
    getFoodById,
    insertFood,
    updateFood,
    deleteFoodById
}