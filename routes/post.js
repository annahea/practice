//1.引入express
const express = require('express');
//2.实例化路由实例
const router = express.Router();
//3.在当前这个路由实例加路由代码
router.get('/', (req, res) => {
    res.send("文章列表");
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