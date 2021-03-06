const express = require('express');

const app = express();

app.get('/', (req, res) => {
   console.log('主页GET请求');
   res.send('Hello GET');
});

app.post('/', (req, res) => {
    console.log('主页 POST 请求');
    res.send('Hello POST');
});

app.get('/del_user', (req, res) => {
    console.log('/del_user 响应 DELETE 请求');
    res.send('Hello DELETE');
});

app.get('/list_user', (req, res) => {
    console.log('/list_user 响应 GET 请求');
    res.send('用户列表页面');
});

app.get('/ab*cd', (req, res) => {
    console.log('/ab*cdr 响应 GET 请求');
    res.send('正则匹配');
});

const server = app.listen(8081, () => {
    const host = server.address().address
    const port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});