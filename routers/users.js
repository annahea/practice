const express = require('express');
const mysql = require('../config/db');
const router = express.Router();

//注册页面路由
router.get('/create', (req, res) => {
    res.render('register');
});

//注册操作路由
router.post('/store', (req, res) => {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var user = [username, password, email];
    console.log(user);
    var add = 'INSERT INTO user_password(id,username,password,email) VALUES(0,?,?,?)';
    mysql.query(add, user, function(err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        } else {
            res.send("注册成功")
        };
    });
});

module.exports = router;