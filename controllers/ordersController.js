const Order = require('../db/models/order');

module.exports = {
  postCreate,
};

async function postCreate(req, res, next) {
  const order = req.body;
  console.log(order);

  const orderDoc = new Order(order);
  try {
    await orderDoc.save();
  } catch (err) {
    console.error(err);
    return next(err);
  }
  return res.json({
    message: 'Thank you for your order.',
    orderNumber: orderDoc._id,
  });
}
