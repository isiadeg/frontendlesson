// Functions 
/*  

function whatevername(arguments1, arguments2){
    
}



reserved keyword

*/

function sum(a, b){
    console.log(a+b);

}

function isItEven(num1){
 if(num1 % 2 === 0){
 console.log(true);
 }else{
    console.log(false);
 }
}

sum(2, 3); // we are calling function sum
isItEven(10);
isItEven(21);

function sayHello(){
    console.log("HELLO, DEAR");
}
sayHello(); // calling the sayHello Function();

function toPercentage(numerator, denominator, percent=100){
    let answer = numerator/denominator * percent;
    console.log(answer);
}

toPercentage(3,4, 200);


hi (){}
undefine d
function hifunction (){ alert "hello world"}
VM181:1 Uncaught SyntaxError: Unexpected string
function hi (){  console.log("hello world")}hi()
VM337:1 hello world
undefined
function myName(name){console.log(name)}name
''   
function myName(name){console.log(name)}name(mujeeb)
VM508:1 Uncaught ReferenceError: mujeeb is not defined
    at <anonymous>:1:46
(anonymous) @ VM508:1
function myName(name){console.log(name)}name("mujeeb")
VM537:1 Uncaught TypeError: name is not a function
    at <anonymous>:1:41
(anonymous) @ VM537:1
function myName(name){console.log(name)}myName("mujeeb")
VM612:1 mujeeb
undefined