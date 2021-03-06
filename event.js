var events = require("events");

var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected() {
//     console.log("连接成功");
//     eventEmitter.emit("data_received");
// };
//
// eventEmitter.on("connection",connectHandler);
//
// eventEmitter.on("data_received", function () {
//     console.log('数据接收成功');
//
// });
// eventEmitter.emit('connection');
// console.log('程序执行完毕。');



var listener1 = function listener1() {
    console.log("监听器listener1执行");
};

var listener2 = function listener2() {
    console.log("监听器listener2执行");
};


eventEmitter.addListener("connection", listener1);

eventEmitter.on("connection", listener2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");

console.log(eventListeners + '个监听事件连接事件');

eventEmitter.emit("connection");

eventEmitter.removeListener("connection", listener1);

console.log("listener1 不再受监听");

eventEmitter.emit("connection");

eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");

console.log(eventListeners + '个监听事件连接事件');

console.log("程序执行完毕");