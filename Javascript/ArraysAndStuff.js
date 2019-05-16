
function sum(d)
{
  var s  =0;
  for(var i=0;i<d.length;i++)
      s = s  + d[i];
  return s;
}
/**
 * @param {number} upperBound - The date
 *@returns {number}
 */
function even(upperBound)
{
   var evenNumbers =[];
   for(var i=0;i<=upperBound;i++)
    if(i%2==0)
     evenNumbers.push(i);
  return evenNumbers;
}
/**
 * 
 * @param {array} arr- the  array
 * @returns {array} a sorted array
 */
function BubbleSort(arr)
{
   var sorted;
   do{
     sorted = true;
     for(var i=0;i<arr.length-1;i++)
       if(arr[i]>arr[i+1])
       {
         var aux =arr[i];
         arr[i]=arr[i+1];
         arr[i+1]=aux;
         sorted = false;
       }
   }while(!sorted);
   return arr;
}
function Main()
{
console.log("Arrays have []");
var d = [2,3,4,5,6,7,8,9,10];
console.log(d[0]);
console.log(d[1]);
console.log(d[4-1]);
var x = new Array(3,4,5,6,7);
var f = new Array(5);
console.log(sum(d));
console.log(d);
console.log(even(12));
var arr = [-5,-6,0,2,3,4,-5,1,2,3,-4,-5,-6,-7];
console.log(BubbleSort(arr));
console.log(arr.concat([1,2,3]));
console.log(arr.pop());
console.log(arr.reverse());
console.log(arr.shift());
var months = ["January","February","March","April"];
console.log(months);
months.splice(1,1,"Februar")
console.log(months);
months.splice(1,1,"February");
months.splice(4,0,["May","June","July","August"]);
console.log(months);
months.splice(7,0,"September","October","November","December");
var  v = new Array(10);
v.fill(3);
v.fill(4,2,5);
console.log(v);
var  array =["Sally","Mally","Jolly","Poly"];
var  newarray =["Mordred",...array];
var newarray=["Alex",...newarray];
console.log(newarray);


/*
var s ="Harry and the mole";
//console.log(s.split(' '));
var q = s.split(' ');
var maxLength=0,poz=0;
var string="";
for(var i =0;i<q.length;i++)
   if(q[i].length>maxLength)
   {
     maxLength = q[i].length;
     string = q[i];
   }
console.log(string);
*/

}

Main();
