function add(a,b=0)
{
    return a+b;

}
console.log(add(3,4));
console.log(add(4));
/*... ==> spread operator **/
function add2(...args)
{
    let s=0;
    for(let object in args)
        s=s+args[object];
    return s;
}
console.log(add2(3,4,5,6));
const a=[2,3,4,5,6];
let b= [1,2,3];
console.log(a);
console.log(b);
b=[...a];
console.log(b);
b=[2,...b];
console.log(b);
console.log(Math.max(...b));


