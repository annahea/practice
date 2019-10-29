//1.引入express
const express = require('express');
//2.实例化路由实例
const router = express.Router();
//3.在当前这个路由实例加路由代码
router.get('/', (req, res) => {
    // res.send("文章列表");
    res.render('post/index', {
        posts: [{
            title: "愉快的星期五",
            content: "非常愉快",
            date: "2019-09-09",
            username: "张三"
        }, {
            title: "愉快的星期四",
            content: "非常愉快",
            date: "2019-09-08",
            username: "张三"
        }, {
            title: "愉快的星期三",
            content: "非常愉快",
            date: "2019-09-07",
            username: "张三"
        }]
    });
});
router.post('/', (req, res) => {
    res.send("新增文章");
});
router.delete("/:id", (req, res) => {
    res.send("删除某个文章");
});
router.get('/:id/edit', (req, res) => {
    res.send("对某个文章做修改");
});
//4.将当前路由实例暴露出去
module.exports = router;