//comment
/*
multi-line comment

*/


console.log("Hello world!");
console.log("This instruction  writes to the console log.");
console.log("Basic data types in javascript are :");
console.log("Number type:");
console.log(2.55);
console.log(Infinity);
console.log(-Infinity);
console.log(3);
console.log('Strings - we can use single quotes for strings!');
console.log("Double ones");
console.log("Escape characters \n are a thing here");

console.log("If you are in doubt, just use type of");
console.log(typeof 4.5);


console.log("Is there a difference?");
console.log(undefined);
console.log(null);

console.log("Logical operators are a thing and they work on strings.");
console.log("mama"<"macara");
console.log("mama"!="mama");
console.log("mama"=="mama");

console.log("And of course, arithmetic operators are the same :");
//**  == exponent , not avaible in all versions, apparently.
console.log(1+2*(3-2)**4);
//parantheses are important!
console.log(1+(2+"3"));
console.log(1+2+"3");
console.log("Authomatic type conversion!");
console.log(8 * null);
// → 0
console.log("5" - 1);
// → 4
console.log("5" + 1);
// → 51
console.log("five" * 2);
// → NaN
console.log(false == 0);
// → true

console.log("Undefined and null are equal?");
console.log(undefined == null);
console.log("Undefined and 0 are equal?");
console.log(undefined==0);
console.log("So, whenever authomatic type conversion  makes your life miserable, use === or !==");
console.log(undefined ===0);

console.log("Logical operators short circuit or whatever...?");
console.log("|| returns whichever operator can be converted into a  number");
console.log(3 || "bar");
//okay, this is wierd.
console.log("five"  && "three");
