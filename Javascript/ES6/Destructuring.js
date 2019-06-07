let voxel = {x: 3.6, y: 7.4, z: 6.54 };
const {x,y,z}=voxel;

console.log(x+" "+y+" "+z);
let person = {name:"John",age:23};

const {name:personName,age:personAge}=person;
console.log(personName+" "+personAge);

let spectacle ={
    timeStart:{hh:3,mm:2,ss:33},
    timeFinish:{hh:4,mm:3,ss:44}
}
const {timeStart:timeBegin,timeFinish:timeEnd}=spectacle;
console.log(timeBegin);
console.log(timeEnd);

const myArray = [1,2,3,4,5];
const [a,b]=myArray;
//1 2 
console.log([a,b]);

//1 2 4 
const [c,d,,e]=myArray;
console.log([c,d,e]);

let first=5,second=6;
console.log([first,second]);
[first,second]=[second,first];
console.log([first,second]);

const [el1,el2,...restArray]=[1,2,3,4,5,6,7,8];
console.log(el1);
console.log(el2);
console.log(restArray);

const [,,...restArray2]=["A","B","C","D","E","F","G"];
console.log(restArray2);


let personAlbert = {name:'Albert',age:25,buget:3600};
function  present({name,buget})
{
  return name + " has budget of"+buget;
}
console.log(present( personAlbert));



