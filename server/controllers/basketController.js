const {Basket, BasketDevice, Device} = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketController {
    // async create(req, res) {
    //     const {name} = req.body
    //     const type = await Type.create({name})
    //     return res.json(type)
    // }

    async getBasketDevices(req, res) {
        let {limit, page} = req.query
        const {id} = req.params
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit

        const device = await BasketDevice.findAndCountAll(
            {
                include: [
                    {
                        model: Basket,
                        where: {userId: id}
                    },
                    {
                        model: Device
                    }
                ],
                offset,
                limit
            },
        )
        return res.json(device)
    }

    async getUserBasket(req, res) {
        const {userId} = req.query
        const basket = await Basket.findOne({
            where: {userId}
        })
        return res.json(basket)
    }

    async createBasketDevice(req, res) {
        const {deviceId, basketId} = req.body
        const basketDevice = await BasketDevice.create({deviceId, basketId})
        return res.json(basketDevice)
    }

    async getAll(req, res) {
        const baskets = await Basket.findAll()
        return res.json(baskets)
    }

    async getAllBasketDevices(req, res) {
        const {id} = req.params
        const baskets = await Basket.findAll({
            include: [{model: BasketDevice, where: {basketId: id}}]
        })
        return res.json(baskets)
    }

    async getOneBasketDevice(req, res) {
        const {deviceId, userId} = req.query
        if(deviceId, userId){
            const baskets = await Basket.findOne({
                include: [{model: BasketDevice, where: {deviceId: deviceId}}],
                where: {userId: userId}
            })
            return res.json(baskets)
        } else {
            return res.json(null)
        }  
    }

}

module.exports = new BasketController()
