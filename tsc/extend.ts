class Par {
    constructor(name :string,age :string){
       this.name = name;
       this.age =  age
    }
    name:string;
    age:string;
    getName() :string {
        return this.name
    }
    getAge() :string {
        return this.age
    }
}

class So extends Par {
    constructor(name:string,age:string,job:string,private myname:string) {
        super(name, age);
        this.job = job;
    }
    job:string;
    sayJob(): void{
        console.log(this.job,this.myname);
    }
}
const a = new So('zs','12','avc','zzz');



