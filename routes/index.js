const { Router } = require('express');
const ingredientsController = require('../controllers/ingredientsController');
const ordersController = require('../controllers/ordersController');

const router = Router();

router.get('/', (req, res, next) => {
  return res.json('Welcome to the Burger-api');
});

router.post('/orders', ordersController.postCreate);
router.get('/ingredients', ingredientsController.getAll);

module.exports = router;
