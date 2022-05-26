const router = require('express').Router();

const bcrypt = require('bcrypt');
const { Admin } = require('../db/models');

router.get('/', (req, res) => {
  res.render('adminAdd');
});



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


router.route('/')
.get( (req, res) => {
  res.render('adminReg');
})
.post(async (req, res) => {
  const { email, pass } = req.body;
  if (email && pass) {
    const currentUser = await Admin.findOne({ where: { email } });
    if (currentUser && await bcrypt.compare(pass, currentUser.pass)) {
      req.session.userid = currentUser.id;
      req.session.userName = currentUser.name;
      req.session.userEmail = currentUser.email;
      
      return res.redirect('/');
    }
    return res.redirect('/');
  }
  return res.redirect('/registration');
});

module.exports = router;



