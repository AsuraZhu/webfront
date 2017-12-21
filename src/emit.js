function EventEmitter(){
    this.callback = {};  // 存放callback 
}
EventEmitter.prototype = {
    // 订阅事件
    on : function(name,callback){
        if(Object.prototype.toString.call(callback)==="[object Function]"){
            if(!this.callback[name]){
                this.callback[name] = [];
                this.callback[name].push(callback);
            }else{
                this.callback[name].push(callback);
            }
        }
    },
    // 触发订阅的事件
    emit: function(name) {
        if(this.callback[name]){
            for(let i =0;i<this.callback[name].length;i++){
                this.callback[name][i]();
            }
        } 
    }
}  

var em = new EventEmitter();
em.on('zs',function(){
    console.log('zs')
})
em.on('zs',function(){
    console.log('zs2')
})
em.on('zs',function(){
    console.log('zs3')
})
em.emit('zs')
