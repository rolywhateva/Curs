//example of  a JS object

let personJohn={
    name:"John",
    age:12,
    
}

for(let prop in personJohn)
{
      console.log(personJohn[prop]);
}
let person={
    firstName:"John",
    lastName:"Doe",
    getFullName:function()
    {
       return  this.firstName+" "+this.lastName;
    }
}


console.log(person.getFullName());
let triangle={
   AB:3,
   BC:4,
  AC:5,
  get perimeter()
  {
      return this.AB+this.BC+this.AC;
  },
  get BA()
  {
      return AB;
  },
  get  CB()
  {
      return CB;
  },
  get CA()
  {
      return CA;
  },
  set BA(value)
  {
      if(value>0)
        this.BA=value;
      else 
         this.BA=-value;
  }


};
Object.defineProperty(triangle,"area",{get:function(){
    let semip=triangle.perimeter/2.0;
    let area = semip*(semip-triangle.AB)*(semip-triangle.BC)*(semip-triangle.AC);
    return Math.sqrt(area);


}});
console.log(triangle.area);

function Point(Xcordinate,Ycordinate,letter)
{
    this.X=Xcordinate;
    this.Y=Ycordinate;
    this.letter=letter;
    this.print = function(){
        return "("+this.X+","+this.Y+")";

    }

}
let A = new Point(3,5,"A");
console.log(A.letter+"="+A.print());


function Animal(animalName,animalAge)
{
    Animal.prototype.owner="Me";
    this.name=animalName;
    this.Age=animalAge;
    this.present = function()
    {
        console.log("Hello,I am "+this.prototype.name+" and I am "+this.prototype.age);
    }

}
function Dog(animalName,animalAge,animalFavToy)
{
       Animal(animalName,animalAge);
      this.favToy=animalFavToy;
      this.present=function()
      {
        
         console.log("And I like playing with "+animalFavToy);

      }

}
var dogJohn =new Dog("John",13,"rubber duck");
dogJohn.present();
console.log(dogJohn instanceof Dog);
console.log(Animal.prototype.owner);
console.log(dogJohn.constructor==Dog);

