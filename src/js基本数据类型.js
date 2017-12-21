//
//基本数据类型 String Number Boolen Array Object Null Undefined

// js 判断数据类型  typeof typeof null=Object
const a = typeof 2

// instanceof
const b = "a" instanceof string

// 最常用的   Object.prototype.toString.call()
Object.prototype.toString.call("1");

// 判断对象中是否存在某个属性
a = {x:1}
"x" in a

a.hasOwnProperty("x");   //自有属性 不会检测原型链

a.isPrototypeOf("x");   // 会检测原型链
