function Person(name,surname,age)
{
    this.name = name;
    this.surname=surname;
    this.age=age;
    this.Present = function()
    {
        return `Hi, I am ${this.name} ${this.surname} and I am ${age} years old`;
    };
   this.Minor = () => age<18;

};

let personJuliet = new Person("Juliet","Park",27);
let personAlbert = new Person("Albert","Johnson",28);
const personArray = [];
console.log(personJuliet.Present());
console.log(personAlbert.Present());
personArray.push(personAlbert);
personArray.push(personJuliet);
for(let person of personArray)
  console.log(person.Present());
for(let prop in personAlbert)
  console.log(prop);
  console.log(personJuliet.Minor());