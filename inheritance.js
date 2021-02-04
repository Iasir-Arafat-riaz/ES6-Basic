class Father{
    constructor(){
        this.father="abdul jolil"
    }
}
class Name extends Father {
    constructor(name){
        super()
        this.fullName= name;
    }
}
const name=new Name("arafat ali")
console.log(name);

