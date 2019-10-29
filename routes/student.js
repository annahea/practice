// //引入express
// const express = require('express');
// //实例化路由实例
// const router = express.Router();
// //加路由代码
// router.get('/', (req, res) => {
//     res.send("学生列表");
// });
// router.post('/', (req, res) => {
//     res.send("新增学生");
// });
// router.delete("/:id", (req, res) => {
//     res.send("删除某个学生");
// });
// router.get('/:id/edit', (req, res) => {
//     res.send("对某个学生做修改");
// });
// //暴露接口
// module.exports = student;

//1.引入express
const express = require('express');
//2.实例化路由实例
const router = express.Router();
//3.在当前这个路由实例加路由代码
router.get('/', (req, res) => {
    res.send("学生列表");
});
router.post('/', (req, res) => {
    res.send("新增学生");
});
router.delete("/:id", (req, res) => {
    res.send("删除某个学生");
});
router.get('/:id/edit', (req, res) => {
    res.send("对某个学生做修改");
});
//4.将当前路由实例暴露出去
module.exports = router;