/**
 * 使用console.time  console.timeEnd 测试性能
 */

console.time("test");
(() => {
    for( let i =0 ; i< 50000; i++) {

    }
})();    
console.timeEnd("test")