function Dog(name)
{
    this.name=name;
}
Dog.prototype={
    constructor:Dog,
    legs:4,
    eat:function()
    {
        console.log(this.name+" is eating.");
    },
    describe:function()
    {
        console.log("It's "+this.name+".");
    }
}
var DogBert = new Dog("Bert");
/*console.log(DogBert.legs);*/
console.log(DogBert.legs);
DogBert.eat();
DogBert.describe();
DogBert.legs=3;
console.log(DogBert.legs);
var DogCarl = new Dog("Carl");
console.log(DogCarl.legs);
console.log(DogBert.constructor==Dog);
console.log(Dog.prototype.isPrototypeOf(DogBert));