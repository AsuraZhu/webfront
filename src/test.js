// 现在fn本身上找a 属性  找不到 就在fn的原型链上面找a 一直遍历到Object上面
function fn(){
    this.a = 'zzz'
}

fn.prototype={
    a:'ccc'
}

console.log(new fn().prototype.a)