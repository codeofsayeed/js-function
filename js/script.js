let age = 78;
let negAge = -age;
console.log(negAge); //print the neg value.
let str1 = "Hello";
let str2 = " MERN 2403!";
console.log(str1 + str2); //or u can write after 5th line:let resultofStr=str1+str2,then u can come to the 6th line.

//String vs Number:
console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2); //note:when you write any value(number) in a string then other all value count as a string ,otherwise they remain  in own datatype.
console.log("3" + 6 + 8);
console.log(3 + 6 + "8"); //if any string assign in 1st for print ,then all other will in string.But,if we assign a string in last,then only assigned value will be string & all other number will be in their own data type

//Not a better way to assigning value:
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1);

//The better way to assigning value:
let num4 = 45;
let num5 = num4;
let num6 = num4;
console.log(num5);
