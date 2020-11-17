const { Router } = require('express');
const Order = require('../db/models/order');

const router = Router();

router.get('/', (req, res, next) => {
  return res.json('Welcome to the Burger-api');
});

router.post('/orders', async (req, res, next) => {
  const order = req.body;
  console.log(order);

  try {
    const orderDoc = new Order(order);
    await orderDoc.save();
  } catch (err) {
    console.error(err);
    return next(err);
  }
  return res.json('Thank you for your order');
});

module.exports = router;
