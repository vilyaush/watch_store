const router = require('express').Router();

const bcrypt = require('bcrypt');
const { Admin } = require('../db/models');

router.route('/')
.get((req, res) => {
  res.render('adminAdd');
})
.post(async (req, res) => {
  const { name, email, pass } = req.body;
  if (name && email && pass) {
    const user = await Admin.findOne({ where: { email } });
    if (user) {
      return res.redirect('/');
    } else {
      const user = await Admin.create({
        ...req.body,
        
        pass: await bcrypt.hash(pass,Number(process.env.SALTROUND)),
      });
      req.session.userid = user.id;
      req.session.userName = user.name;
      req.session.userEmail = user.email;
      
      return res.redirect('/');
    }
  }
  return res.redirect('/adminAdd');
});




module.exports = router;



