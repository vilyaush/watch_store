const router = require('express').Router();

router.get('/',(req,res)=>{
  res.render('korusel')
})
module.exports = router;
