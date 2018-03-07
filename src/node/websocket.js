const net = require("net");
const HOST = "127.0.0.1";
const PORT = "8000";

//创建一个 TCP 服务器实例
net
  .createServer(socket => {
    // 我们获得一个连接 - 该连接自动关联一个socket对象
    console.log("CONNECTED: " + socket.remoteAddress + ":" + socket.remotePort);
    socket.on("connect", data => {
      console.log('---------------开始连接------------')  
      console.log(data);
      console.log('---------------开始连接------------')  
    });
    socket.on("data", function(data) {
      console.log('---------------接受数据------------')  
      console.log("DATA " + socket.remoteAddress + ": " + data);
      console.log('---------------接受数据------------') 
    });

    socket.on("close", function(data) {
      console.log("关闭连接");
    });
  })
  .listen(PORT, HOST);

