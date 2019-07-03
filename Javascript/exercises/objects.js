const point = {
     x:1,
     y:1,
     print()
     {
          console.log("("+this.x+","+this.y+")");
     }
}
console.log(point.x);
console.log(point.y);
for(let property in point)
{
    console.log("point."+property+"="+point[property.toString()]);
}
point.z=1;
console.log(point);

delete point.z;
console.log(point);


const a=[2,3,4,"Shara"];
console.log(a);
console.log(Array.isArray(a));
a.push(4);
a.push(4,3);
console.log(a);
let returned = a.pop();
console.log(returned);
a.shift();
console.log(a);
a.unshift(3);
console.log(a);

const b =[-3,4,5,7,8,-7,0,0,0,0,0,0,0,4];
console.log("b="+b);
const sortAscending =(a,b)=>a-b;
b.sort(sortAscending);
console.log("b="+b);
const sortDescending =(a,b)=>-sortAscending(a,b)
b.sort(sortAscending);
console.log("b="+b);