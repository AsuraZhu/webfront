// 原型链继承

// 寄生组合继承
function Parent() {
    
}
Parent.prototype = {};

function Son() {
    Parent.call(this);
}
Son.prototype = {};

(function(){
    const Super = new Function();
    Super.prototype = Parent.prototype;
    Son.prototype = new Super();
    Son.prototype.constructor  = Son;
})()



// typescript生成的继承 
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * BaseClass
 */
var BaseClass = (function () {
    function BaseClass(name, age) {
        this.name = name;
        this.age = age;
    }
    BaseClass.prototype.sayName = function () {
        console.log(this.name);
    };
    return BaseClass;
})();
/**
 * SubClass
 */
var SubClass = (function (_super) {
    __extends(SubClass, _super);
    function SubClass(name, age, job) {
        _super.call(this, name, age);
        this.job = job;
    }
    SubClass.prototype.sayJob = function () {
        console.log(this.job);
    };
    return SubClass;
})(BaseClass);
var subClass = new SubClass('张三', 18, 'Coder');
subClass.sayJob();
subClass.sayName();
console.log(subClass);