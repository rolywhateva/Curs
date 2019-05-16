'esversion:6'
//Wierd functions
var  helloWorld = function()
{
  console.log("Hello World");
};
var square  = function(d)
{
 return d*d;
}; //<-- semicolon!!!!

var PrintMessage = function(toPrint,timesToPrint)
{
  //A function in a function, Print does not
  //exist outside this thing.
  var Print = function(message)
  {
    console.log(message);

  };
  for(var i =1;i<=timesToPrint;i++)
  {
   Print(toPrint);
   console.log("\n");
 }
};


//arrow functions
var  power = (base,exponent)=>{
  var result = 1;
  for (var count = 0; count < exponent; count++) {
  result *= base;
  }
  return result;

};
//optional  arguments
function minus(a,b)
{
  if(b== undefined)
   return -a;
   else
     return a-b;
}
function power2(base, exponent=2)
{
  var result = 1;
  for (var  count = 0; count < exponent; count++) {
  result *= base;
  }
}

//numar variabil de parametrii

function  max(...numbers)
{
  let result = -Infinity;
for (let number of numbers)
  if (number > result)
    result = number;



return result;
}
//Short declaration; semicolon not needed.
function Main()
{

 helloWorld();
 console.log(square(5));
 PrintMessage("Hello",10);
 console.log(power(3,5));
 console.log(minus(16));
 console.log(minus(3,2));
 console.log(power2(6));
var d = power2(7);
console.log("7*7=${d}");
console.log(max(3,4,5,6,7,8,9,10));
var a = c=>2*c;
a(2);


 square("12");

}

Main();
