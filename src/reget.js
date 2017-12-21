// 文件后缀处理
const extname = (filename) => {
    return filename.match(/\.\w+/)[0]
}
console.log(extname("abc.jpg"))

// 使用 递归 输入m,n 返回一个数组长度为m ,值都为n
const initArray = (m, n) => {
    const arr = [];
    for(let i = 0;i<m;i++){
        arr[i] = n;
    }
    return arr;
}

// 判断类型
const type = (obj) => {
    return Object.prototype.toString.call(obj).match(/\s\w+/)[0].replace(/\s/,"")
    .toLowerCase()
  }


