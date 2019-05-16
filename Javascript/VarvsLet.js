/**
var - pentru variabile globale, practic.
let - locale.


**/
function Iterate(n)
{
  for(let i =0;i<n;i++)
     console.log(i);

}
function Sum(n,s){
  while(n!=0)
{
   s +=n%10;
   n/=10;
}

}

function main()
{
  Iterate(100);
  var n,s=0;
  n=456;
Sum(n,s);
console.log(s);
}

/*
for(let j=0;j<100;j++)
 console.log(j);
console.log(j);
*/


main();
