









function main()
{
  var s="Hello";

  for(let i=0;i<s.length;i++)
       console.log(s[i]);
   s=s.concat(" world!");
   console.log("a".concat("+b","=c"));




   console.log(s);
   console.log(s[0]);
   console.log(s.charCodeAt(0));

   console.log(s.slice(0,3));
   console.log(s.slice(-3));
   console.log("Hello world".includes("Hello"));
   //console.log(s.splice(s.Length-1,0," ,bitches!"));
var a =[3,4,5,6,7,8,9,10];
console.log("%c(%s)","color:red;font-weight:bold",a.join(","));
console.log("Hello world".split(' '));
console.log("Hello".repeat(10));









}

main();
