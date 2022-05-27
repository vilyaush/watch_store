const router = require('express').Router();
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  const orders = await User.findAll();
  res.render('orders');
})


module.exports = router;
