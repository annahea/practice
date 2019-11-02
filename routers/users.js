const express = require('express');
const mysql = require('../config/db');
const userModel = require('../models/user-password');
const router = express.Router();

//注册页面路由
router.get('/create', (req, res) => {
    res.render('register');
});

//注册操作路由
router.post('/store', (req, res) => {
    var user = [req.body.username, req.body.password, req.body.email];
    mysql.query(userModel, user, function(err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        } else {
            res.send("注册成功")
        };
    });
});

module.exports = router;