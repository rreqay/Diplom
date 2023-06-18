const Router = require('express')
const router = new Router()
const BasketController = require('../controllers/basketController')

router.post('/createBasketDevice', BasketController.createBasketDevice)
router.get('/', BasketController.getAll)
router.get('/getAllBasketDevices/:id', BasketController.getAllBasketDevices)
router.get('/getBasketDevices/:id', BasketController.getBasketDevices)
router.get('/getOneBasketDevice', BasketController.getOneBasketDevice)
router.get('/getUserBasket', BasketController.getUserBasket)
router.delete('/deleteBasketDevice/:id', BasketController.deleteBasketDevice)

module.exports = router
