let car={
    name:"",
    model:"",
    weight:1,
    color:"",
    init:function(name="",model="",weight=1,color="")
    {
        this.name=name;
        this.model=model;
        this.weight=weight;
        this.color=color;
    },
    crash:function()
    {
        console.log(this.name+" is crashing");
    }




};
let carHenry = car;
carHenry.init("Henry","Toyota",300,"white");
carHenry.crash();
console.log(carHenry.name);
console.log(carHenry["name"]);
carHenry.age=25;
console.log(carHenry.age);
console.log(car.name);
console.log(car.age);

const oldercar = (cara,carb)=>cara.age>cara.age?cara:carb;





