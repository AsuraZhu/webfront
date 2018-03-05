/**
 * ajajx() 可以兼容ie
 * ActiveXObject 是ie6以下
 * 简单的使用xmlhttprequest对象
 * 
 * 
 */

 // options 是{} 
function ajax(options) {
    const opt = {
        type: "get",
        url: "/",
    };
    const xhr = new XMLHttpRequest();
    // 打开一个连接 

    xhr.open(options.type,options.url);
    xhr.responseType = "json";
    xhr.send();
    // 
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4) {
            if(xhr.status==200 && xhr.status <300){
                return xhr.response;
            }
        }
        return xhr.response;
    }
}


// 不考虑兼容性使用fetch

fetch('url', {
    method: "post",
    body: {"methods":"test"}
}).then(res => {
   res.json(); 
})

