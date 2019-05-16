
//variable in javascript
let name = "whatever";
console.log(name +"  "+name);
//also a variable?What's the difference?
var score = 5;
console.log(score*score);
console.log(score + "*"+ score +"="+(score*score));

//all  the variables for the enviroment

//if is like in C, C++, or C#

var a = 3;
var b= 5;
if(a<b)
console.log(a+"<"+b);
else
if(a==b)
  console.log(a+"=="+b);
  else
   console.log(a+">"+b);

//while is the same...
var  i=1;
while(i<=10)
{
  console.log(i);
  i++;
}
//do while is the same...

var i=10;
do{
  console.log(i);
  i++;
}while(i<=20);
//for is the same
for(var i=20;i<=30;i++)
  console.log(i);
//prompt asks for input from user.
  switch (prompt("What is the weather like?")) {
    case "rainy":
      console.log("Remember to bring an umbrella.");
      break;
    case "sunny":
      console.log("Dress lightly."); break;
    case "cloudy":
      console.log("Go outside.");
      break;
    default:
      console.log("Unknown weather type!");
      break;
  }

  var n =7;
  var stringToPrint="";
  for(var counterI=1;counterI<=n;counterI++)
  {
    stringToPrint+="#";
    console.log(stringToPrint+"\n");

  }

  n=100;
  for(var counterI=1;counterI<=n;counterI++)
    if(counterI%3==0&&counterI%5==0)
    {
       console.log("FizzBuzz");
    }
    else  if(counterI%3==0)
    {
      console.log("Fizz");
    }
     else if(counterI%5==0)
     {
      console.log("Buzz");
    }
      else
        console.log(counterI);
var numberOfK=4;
var oddString="";
for(var i=0;i<numberOfK;i++)
oddString+=" "+"#";

var evenString="";
for(var i=0;i<numberOfK;i++)
 evenString+="#"+" ";

 var rows =8;
 for(var i=1;i<=rows;i++)
  if(i%2==0)
   console.log(evenString);
   else
   console.log(oddString);
