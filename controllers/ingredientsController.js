module.exports = {
  getAll,
};

async function getAll(req, res, next) {
  res.json({
    salad: 0.4,
    bacon: 1,
    cheese: 0.5,
    meat: 1.5,
  });
}
