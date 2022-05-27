const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('message')

});
// router.post('/message',(req,res)=>{
//   res.redirect('/')
// })

module.exports = router;
