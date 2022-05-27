const router = require('express').Router();
const {User} = require('../db/models')
router.get('/',(req,res)=>{
  res.render('watch')
});

router.post('/',async (req, res) => {
    const { name, email, phone, img } = req.body;
    console.log('--------------------', req.body);
    if (name && email && phone && img) {
      const watch = await User.create(req.body);
      return res.json(watch);
    }
   
  })
module.exports = router;
