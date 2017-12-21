var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Par = (function () {
    function Par(name, age) {
        this.name = name;
        this.age = age;
    }
    Par.prototype.getName = function () {
        return this.name;
    };
    Par.prototype.getAge = function () {
        return this.age;
    };
    return Par;
}());
var So = (function (_super) {
    __extends(So, _super);
    function So(name, age, job, myname) {
        var _this = _super.call(this, name, age) || this;
        _this.myname = myname;
        _this.job = job;
        return _this;
    }
    So.prototype.sayJob = function () {
        console.log(this.job, this.myname);
    };
    return So;
}(Par));
var a = new So('zs', '12', 'avc', 'zzz');
//# sourceMappingURL=extend.js.map