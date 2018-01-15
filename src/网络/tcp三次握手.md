## tcp三次握手和四次挥手
    SYN(synchronous建立联机)
    ACK(acknowledgement 确认)
    PSH(push 传送)
    FIN(finsh 结束)
    RST(reset 重置)
    URG(urgent 紧急)
    Sequence number(顺序号码)
    Acknowledge number(确认号码)

[参考连接](https://www.cnblogs.com/Jessy/p/3535612.html) https://www.cnblogs.com/Jessy/p/3535612.html

### 三次握手
1. client发送SYN包 到server,并进入SYN_SEND状态，等待服务器确认
2. server收到SYN包，确认SYN包，并发送客户端一个SYN+ACK包，服务器进入SYN_RECV状态
3. client收到服务器的SYN+ACK包，向server发送一个ACK确认包，client server进入ESTABLISHED状态，完成三次握手，客户端与服务器开始传送数据

### 四次挥手
1. client发送一个FIN,用来关闭与服务器的链接
2. server收到FIN,发送一个ACK，确认序列号收到的序号加1
3. server关闭与client的连接，发送一个FIN给client
4. client发回ACK报文确认，并将确认序列号设置为收到序列号加1

