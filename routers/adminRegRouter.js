
const router = require('express').Router();

const bcrypt = require('bcrypt');
const { Admin } = require('../db/models');

router.get('/', (req, res) => {
  res.render('adminReg');
});

router.route('/signOut')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sID').redirect('/');
  });

router.post('/',async (req, res) => {
  const { email, pass } = req.body;
  if (email && pass) {
    const currentUser = await Admin.findOne({ where: { email } });
    if (currentUser && await bcrypt.compare(pass, currentUser.pass)) {
      req.session.userid = currentUser.id;
      req.session.userName = currentUser.name;
      req.session.userEmail = currentUser.email;
      
      return res.redirect('/');
    }
    return res.send('неверный пароль');
  }
  return res.redirect('/');
});


module.exports = router;
