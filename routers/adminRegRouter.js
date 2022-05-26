const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('adminReg');
});

module.exports = router;
