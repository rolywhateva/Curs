class Person{
    static count=0;
    constructor(name,surname,age)
    {
        this.name=name;
        this.surname=surname;
        this.age=age;
        Person.count++;
    }
    present()
    {
        return `Hi, I am ${this.name} ${this.surname} and I am ${this.age} years old`;

    }
    get IsMinor(){
        return this.age<18;
    }
    static Whois(person)
    {
        console.log(`This is ${person.name}`);
    }


  

}
var p = new Person("Johny","Potty",18);
var p2 = new Person("Ellie","Jelly",16);
console.log(p.present());
console.log(p.IsMinor);
Person.Whois(p);
console.log(Person.count);