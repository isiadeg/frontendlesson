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