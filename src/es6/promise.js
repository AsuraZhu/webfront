/**
 *  Promise(A+)
 * 
 * Promise.all()   将多个Promise实例包装成一个新的Promise实例
 *  
 *  async await
 * 
 */
async function fn() {
    await new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("你好")
            resolve("nihao")
        },1000)
    })

    console.log("promise is done")

}
fn()
