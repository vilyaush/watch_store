const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('adminAdd');
});

module.exports = router;
