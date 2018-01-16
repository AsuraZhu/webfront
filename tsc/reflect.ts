/**
 * ts中的反射通过 Reflect这个方法是js自带的
 * https://www.cnblogs.com/brookshi/p/6426732.html
 */

class Test {
    constructor(name: string) {
        this.name = name;
    }

    name: string;
    flag: Symbol = Symbol('flag');

    getName(): string {
        return this.name;
    }
}

let obj = new Test('123');

// tslint:disable-next-line:no-console
console.info(Reflect.has(obj, 'name')); // true
console.info(Reflect.has(obj, 'flag')); // true
// tslint:disable-next-line:no-console
console.info(Reflect.has(obj, 'get')); // true
console.info(Reflect.has(obj, 'toString')); // true
for ( const p of Reflect.ownKeys(obj)){
    // tslint:disable-next-line:no-console
    console.info(p); // name, flag
}
