/**
 * 数组去重
 */

const arr = [0,1,2,2,3,4,4,1];
const arrT = [];
let jsonT = {};
arr.forEach(function(val,index,arr){
    if(!jsonT[val]){
        jsonT[val] = 1;
        arrT.push(val)
    }
})
console.log(arrT);

// es6 数组的核心的几个方法
/**
 * 1. 扩展运算符  ...
 * 2. 合并数组   [...arr1, ...arr2, ...arr3]
 * 3. 把字符串转换成数组   [..."hello"]
 * 4. Iterator 接口对象
 * 5. Map Set结构  Generator 函数
 * entries() keys()  values() 配合for of使用
 */

 // Array.from()   将将类数组的对象(arry-like-object)和可遍历（iterable）的对象


 // find 方法
 [1,4,-5,10].find((n)=> n<0)

// findIndex() 方法

