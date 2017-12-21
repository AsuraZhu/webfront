var Emitter = (function () {
    function Emitter() {
        this.callback = new Map();
    }
    Emitter.prototype.emit = function (name) {
        if (this.callback.has(name)) {
            for (var _i = 0, _a = this.callback.get(name); _i < _a.length; _i++) {
                var item = _a[_i];
                item();
            }
        }
    };
    Emitter.prototype.on = function (name, handler) {
        if (this.callback.has(name)) {
            var use = this.callback.get(name);
            use.push(handler);
            this.callback.set(name, use);
        }
        else {
            this.callback.set(name, []);
            var use = this.callback.get(name);
            use.push(handler);
            this.callback.set(name, use);
        }
    };
    return Emitter;
}());
var mm = new Emitter();
mm.on('zs', function () { console.log('zs1'); });
mm.on('zs', function () { console.log('zs2'); });
mm.on('zs', function () { console.log('zs3'); });
mm.emit('zs');
//# sourceMappingURL=emit.js.map