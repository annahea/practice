const express = require('express');
const mysql = require('../config/db'); //配置文件
const userModel = require('../models/user-password'); //数据库增删改查
const router = express.Router(); //路由模块

//注册页面路由
router.get('/create', (req, res) => {
    res.render('register');
});

//注册操作路由

//存储到数据库
router.post('/store', (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.email) {
        res.send("请输入完整注册信息！");
        return;
    };
    //存入数据

    //判断数据是否已经存在
    mysql.query(userModel.getUserByEmail, [req.body.email], function(err, result) {
        if (err) { throw err } else {
            for (var i = 0; i < result.length; i++) { //遍历结果
                if (result[i].email == req.body.email) {
                    res.send('用户已存在，请重新输入');
                    return;
                };
            };
        };
        //存入数据库
        const user = [req.body.username, req.body.password, req.body.email];
        mysql.query(userModel.insert, user, function(err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            } else {
                res.send('注册成功');
                return;
            };
        });

    });
});
module.exports = router;