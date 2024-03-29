const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
//设置模版引擎
app.set("views", "views");
app.set("view engine", "ejs");
//主页路由
app.get('/', (req, res) => {
    res.render('welcome.ejs', {
        name: "张三",
        isLogin: true
    }); //渲染哪个模版页面出去
});


const postRouter = require('./routes/post'); //调用post
const studentRouter = require('./routes/student'); //调用student
app.use('/posts', postRouter);
app.use('/students', studentRouter);

//调用数据库查询




// //中间件调用
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// //中间件调用
// app.use(cookieParser());

// //中间件，静态资源调用
// app.use(express.static('public'));
// //中间件，

// app.get('/', (req, res) => {
//     res.send("hello express");
// });
// app.get('/setCookie', (req, res) => {
//     //设置cookies
//     res.cookie('username', 'zhangsan', {
//         maxAge: 1000 * 60 * 10 //最大保存时间
//     });
//     res.send('cookie设置成功')
// });
// app.get('/getcookie', (req, res) => {
//     res.send('cookie获取成功')
// });
// app.post('/handleLogin', (req, res) => {
//     console.log(req.body);
//     res.send("you are noisy");
// });
// //req.params
// //获取路由动态参数
// //localhost:3000/hello/apple
// //localhost:3000/hello/banana
// //localhost:3000/hello/orange

// app.get('/hello/:id', (req, res) => {
//     console.log(req.params); // {id:apple}
//     res.send('我来了');
// });
// //localhost:3000/world/name/age
// app.get('/world/:name/:age', (req, res) => {
//     console.log(req.params); // {id:apple,age:18}
//     console.log(req.get('accept'))
//     res.send("hello world");
// });
// const myHello = type => {
//     return (req, res, next) => {
//         let abc = new Date();
//         let year = abc.getFullYear();
//         let month = abc.getMonth();
//         let date = abc.getDate();
//         if (type === 1) {
//             req.requestTime = `${year}-${month}-${date}`;
//         } else if (type === 2) {
//             req.requestTime = `${year}-${month}-${date}`;
//         } else if (type === 3) {
//             req.requestTime = `${year}`;
//         } else {
//             req.requestTime = abc.getTime();
//         };
//         next();
//     };
// };
// app.use(myHello(3));

// app.get('/test', (req, res) => {
//     console.log(req.requestTime);
//     res.send('test');
// });

app.listen(3300);