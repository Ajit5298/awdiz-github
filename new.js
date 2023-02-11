//declaration statement and execution context 
// declaration statement means it takes value from variable but do not return anything.
// execution context means it helps to showcase end result however gets hold if and value had error. 
console.log("at begin")
var number1 = 10;
var number2 = 20;
console.log("at middle")
var number3 = 10;
var number4 = 20;
console.log("at last")

//conditional statement
//1) if else, else if ( to find the condition is true itself )
// if else can be place only once in braces '{}' and else if numerous time within them.
//2) switch ()
var number1 = 10;
var number2 = 20;
if (number2 > number1) {
    console.log("number 2 is greater than 1");
} else {
    console.log("for false");
}

var number1 = 10;
var number2 = 20;
if (number2 <= number1) {
    console.log("Number 2 is greater than Number 1");
} else {
    console.log("its false");
}

var userage = 18;
if (userage > 18) {
    console.log("user is applicable for licence")
} else if (userage == 18) {
    console.log("user is applicable for learning lic..")
} else {
    console.log("user is NOT applicable !")
}

var userage = 21;
if (userage > 18) {
    console.log("user is applicable for licence..")
} else if (userage == 18) {
    console.log("user is applicable for learning licence")
} else {
    console.log("user is not applicable for licence")
}
// Q - check given number is odd or even and display the result.

var userNumber = 89;
if ((userNumber % 2) == 0) {
    console.log("provide number is Even!");
} else {
    console.log("provide number is ODD!");
}
//  44
2 / 89
88
01
//odd 

var userNumber = 80; 
    if ((userNumber % 2) == 0){
    console.log("provide number is even!");
} else {
    console.log("provide number is odd!");
}

//true = even
//false = odd

// " % "is called modulas . result comes out from remainder
// " / " is called division  . result come from quotient

// switch

var number = 2;
switch (number) {
    case number == 1:
        console.log("number is 1");
        break;
    case number == 2:
        console.log("Number is 2");
        break;
    case number == 3:
        console.log(" number is 3");
        break;
    default:
        console.log("number is different from 1,2,3");
}

var number = 2;
switch (number) {
    case 1:
        console.log("number is 1!");
        break;
    case 2:
        console.log("number is 2!");
        break;
    case 3:
        console.log("number is 3");
        break;
    default:
        console.log(" number is diffent from 1,2,3");
}

// if the answer matches it will break or it will run till defaults.

var expr = 'papayas';
switch (expr) {
    case 'orange':
        console.log("oranges");
        break;
    case 'papayas':
        console.log("papayas");
        break;
    default:
        console.log(`sorry, we are out of ${expr}`);
        break;
}

// template literls

var Myname = 'Ajit';
var Mycity = 'mumbai';
console.log("My name is", Myname,"and Im from ", Mycity,"");
console.log(`My name is ${Myname} and I'm from ${Mycity}`);