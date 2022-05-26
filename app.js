const express = require("express");
const hbs = require("hbs");
const morgan = require("morgan");
// const indexRouter = require('./routers/indexRouter')  
const path = require('path')
const watchRouter = require('./routers/watchRouter')
const adminAddRouter = require('./routers/adminAddRouter')
const adminRegRouter = require('./routers/adminRegRouter');

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
app.use('/watch', watchRouter)
app.use('/adminAdd', adminAddRouter);
app.use('/adminReg', adminRegRouter);

app.get('/', (req, res) => {
  res.render('index');
})


app.listen(PORT, () => {
  console.log('server start on', PORT);
});
