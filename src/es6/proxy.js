const target = {};
const handler = {
    get(target, key, receiver) {
        console.log(` Getting ${key}`)
        return Reflect.get(target, key, receiver) 
    },
    set(target, key, value, receiver) {
        console.log(`Setting ${key}!`)
        return Reflect.set(target, key, value, receiver)
    }
}

const proxy = new Proxy(target, handler)

console.log(proxy.name)
proxy.name = 'test'

console.log(proxy.name)

proxy.count = 1