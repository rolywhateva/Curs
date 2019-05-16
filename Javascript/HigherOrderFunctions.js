function main()
{
repeat(10,prime);
var greatherthan10 = Greatherthan(10);
console.log(greatherthan10(11));
var divisiblewith10 = divisiblewith(10);
console.log(divisiblewith10(100));
}
function repeat(n,action)
{

  for(let i=1;i<=n;i++)
  {
   console.log(action(i));
 }
}

function prime( i)
{
   var nr =0;
   var d =1;
   while(nr<i)
  {
    if(isPrime(d))
    {
       nr++;
    }
    d++;

  }
  return d-1;
}
function isPrime(n)
{
 if(n<2)
   return false;
for(let i=2;i*i<=n;i++)
   if(n%i==0)
      return false;
      return true;
}
function Greatherthan(n)
{
  return  m =>m>n;
}
function divisiblewith(n)
{
   if(n==0)
   return m=>0;
  return m =>m%n==0;
}
main();
