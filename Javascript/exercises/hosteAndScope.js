/** 
var x = 5;
function f() {
  if (x < 10) var x = 20;
  console.log(x);
}
f();
console.log(x);

var a = 1;
function b() {
  function a() {}

  a = 10;
  return;
}
b();
console.log(a);

function foo() {
  function bar() {
    return 3;
  }
  return bar();
  function bar() {
    return 8;
  }
}

alert(foo());


function parent() 
{   
     var hoisted = "I'm a variable";   

     //ignored...
      function hoisted() 
      {       
           return "I'm a function";    
        }  
        //hoisted is not a function 
        return hoisted(); 
}
console.log(parent());
*/
alert(foo());
function foo() {  
    var bar=f;
  
   var d =  function f(){    return 3;  }; 
     return bar(); 
     function  f() {    return 8;  };
    
    }
