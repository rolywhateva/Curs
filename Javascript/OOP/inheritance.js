function Animal(){
   
}
Animal.prototype={
    eat:function()
    {
        console.log("Nom nom nom nom..");
    },
    name:"",
    makeSound:function(){},
    describe:function(){}


};
function Dog(name){
    this.name=name;
    this.makeSound=function()
    {
        console.log(this.name+" barks.");
    };
    this.describe=function()
    {
        console.log("It's "+ this.name + " he's a dog.");
    };
}
function Parot(name){
  
    this.name=name;
    this.makeSound=function()
    {
        console.log(this.name+" talks");
    };
    this.describe=function()
    {
        console.log("It's "+ this.name + " he's a parot.");
    };
}
Dog.prototype=Object.create(Animal.prototype);
Parot.prototype=Object.create(Animal.prototype);
//Parot.prototype=Object.create(Animal.prototype);
var ParotGale = new Parot("Gale");
ParotGale.eat();
ParotGale.describe();
ParotGale.makeSound();

var DogBert = new Dog("Bert");
DogBert.eat();
DogBert.describe();
DogBert.makeSound();


