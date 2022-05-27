require('dotenv').config();
const express = require("express");
const hbs = require("hbs");

// const indexRouter = require('./routers/indexRouter')  
const session = require('express-session');
const morgan = require('morgan');

const FileStore = require('session-file-store')(session);
const path = require('path')
const watchRouter = require('./routers/watchRouter')
const adminAddRouter = require('./routers/adminAddRouter')
const adminRegRouter = require('./routers/adminRegRouter');
const slaydRouter = require('./routers/slaydRouter')
const messageRouter = require('./routers/messageRouter')



const app = express();
const PORT = 3000;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public/'));


app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(morgan('dev'));
app.use(session({
  name: 'sID',
  store: new FileStore({}),
  secret: process.env.SESSION,
  resave: true,
  saveUninitialized: false,
}));
app.use('/watch', watchRouter)
app.use('/adminAdd', adminAddRouter);
app.use('/adminReg', adminRegRouter);
app.use('/message', messageRouter);
app.use('/korusel',slaydRouter);

app.get('/', (req, res) => {
  res.render('index');
})


app.listen(PORT, () => {
  console.log('server start on', PORT);
});
