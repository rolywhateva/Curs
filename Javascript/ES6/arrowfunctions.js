"use strict";
const arrowfunc = ()=>"Hello,world";
function printmsg(times)
{
    for(let i=0;i<times;i++)
     console.log(arrowfunc());
}
printmsg(10);
