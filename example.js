const http = require('http');
const url = require('url');
const util = require('util');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '用户名： <input name="userName"><br>' +
    '密码： <input name="password"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';


const server = http.createServer((req, res) => {

    // get 获取数据
    // res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    // // res.end(util.inspect(url.parse(req.url, true)));
    // const params = url.parse(req.url, true).query;
    // res.write(`用户名：${params.userName}`);
    // res.write("\n");
    // res.write(`密码：${params.password}`);
    // res.write("\n");
    // res.end(util.inspect(url.parse(req.url, true)));

    // post数据

    let body = "";
    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', ()=> {
        body = querystring.parse(body);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        if (body.userName && body.password) {
            res.write(`用户名：${body.userName}`);
            res.write("\n");
            res.write(`密码：${body.password}`);
            res.write("\n");
        } else {
            res.write(postHTML);
        }
        res.end();
    })




});


server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})