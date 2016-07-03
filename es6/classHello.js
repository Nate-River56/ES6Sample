class Person{
  
  constructor(name){
    this.name = name;
  }

  say(){
    return `My Name is ${this.name}.`;
  }

}

class Man extends Person{
  isMan(){
    return true;
  }
}

var man = new Man("John");

console.log(man.say());
console.log(`isMan: ${man.isMan()}`);
console.log(man);
