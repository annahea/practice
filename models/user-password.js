const userModel = {
    insert: 'INSERT INTO user_password(id,username,password,email) VALUES(0,?,?,?)', // 插入数据
    drop: 'DROP TABLE user_password', // 删除表中所有的数据
    queryAll: 'SELECT * FROM user_password', // 查找表中所有数据
    getUserById: 'SELECT * FROM user_password WHERE id =?', // 查找符合条件的数据
    getUserByEmail: 'SELECT * FROM user_password WHERE email =?', //查找符合邮箱的数据
};
module.exports = userModel;