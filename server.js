const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

//中间件调用
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//中间件调用
// app.use(cookieParser());


app.get('/', (req, res) => {
    res.send("hello express");
});
app.get('/setCookie', (req, res) => {
    //设置cookies
    res.cookie('username', 'zhangsan', {
        maxAge: 1000 * 60 * 10 //最大保存时间
    });
    res.send('cookie设置成功')
});
app.get('/getcookie', (req, res) => {
    res.send('cookie获取成功')
});
app.post('/handleLogin', (req, res) => {
    console.log(req.body);
    res.send("you are noisy");
});
//req.params
//获取路由动态参数
//localhost:3000/hello/apple
//localhost:3000/hello/banana
//localhost:3000/hello/orange

app.get('/hello/:id', (req, res) => {
    console.log(req.params); // {id:apple}
    res.send('我来了');
});
//localhost:3000/world/name/age
app.get('/world/:name/:age', (req, res) => {
    console.log(req.params); // {id:apple,age:18}
    console.log(req.get('accept'))
    res.send("hello world");
});


app.listen(3000);