class Emitter {
    constructor() { }
    private callback = new Map<string, Array<() => void>>();
    emit(name: string): void {
        if (this.callback.has(name)) {
            for (const item of this.callback.get(name)) {
                item();
            }
        }
    }
    on(name: string, handler: () => void) {
        if (this.callback.has(name)) {
            const use = this.callback.get(name);
            use.push(handler);
            this.callback.set(name, use);
        } else {
            this.callback.set(name, []);
            const use = this.callback.get(name);
            use.push(handler);
            this.callback.set(name, use);
        }
    }
}

const mm = new Emitter();
mm.on('zs', () => { console.log('zs1'); });
mm.on('zs', () => { console.log('zs2'); });
mm.on('zs', () => { console.log('zs3'); });
mm.emit('zs');

