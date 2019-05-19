"use strict";
const a=2;
//a=3; <!--Eroare --> 
const b =[2,3,4];
console.log(b);
b.pop();
console.log(b);
/*b=[1,2,3]; <!--Eroare-->*/
let obj={
    name:"Full",
    age:42
};
Object.freeze(obj);
console.log(obj);
//obj.score=42; //<!--Eroare --> 
console.log(obj);


