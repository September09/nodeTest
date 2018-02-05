import express from 'express';
import router from './router/index';

const app = express();

router(app);

var server = app.listen(8001, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})