const express = require('express');
const app = express();

//中间件调用
const cookieParser = require('cookie-parser');
const userRouter = require('./routers/user');

//模版引擎
app.set('views', 'views');
app.set('view engine', 'ejs');

//处理静态资源托管
app.use(express.static('public'));

//处理 req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//处理req.cookies
app.use(cookieParser());

//处理各种路由中间件
app.use('/users', userRouter);

app.listen(3000);