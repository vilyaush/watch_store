const router = require('express').Router();

router.get('/',(req,res)=>{
  res.render('watch')
})
module.exports = router;
