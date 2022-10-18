// global and local variable
let myName = "sade"; //global variable
let iCanChange = 2;

function whatIsMyName(){
let myName ="ayaba"; // variable declared in a function only exist in the function;
    //local variable
    console.log(myName);// this is a local variable and will get a new value that is
    //different from the value of the one outside this function because we have redeclared it
    // note that the outside one  global variable will not be affected nor change.
    // they are basically fdifferent variables 
    iCanChange++;
    console.log(iCanChange); // This variable will change to 3 since it's a global 
    //variable and we did not redeclare it inside this function

    let meAlone = "mealone";
    console.log("Mealone inside the whatIsMyName Function is "+meAlone)

}

whatIsMyName();

console.log(myName);
console.log(iCanChange);
//console.log(meAlone); // expected output -> error because we cannot access a local variale
// outside the function in which it was created;


function increaseByOne(anynum){
    anynum++;
    console.log(anynum);
}

increaseByOne(2); //prints 3 to console;
increaseByOne(3); // prints 4 to the console

let myOwnNumber = 10;

console.log(myOwnNumber);

increaseByOne(myOwnNumber); // prints 11 to the console

console.log(myOwnNumber);

// assignment by value; 
// case 1; 
//case 2; 
//case 3
//case 4

function greeting(name){
    name = "Hello "+name;
    console.log(name)
    
}

greeting("sodiq") // Hello Sodiq
greeting("Bobayeori") // Hello Bobayeori;

let myOgaName = "Abu Fauziyat";
 greeting(myOgaName); //greeting("Abu Fauziyat");

 console.log(myOgaName) // expected output here is Abu Fauziyt

 let collectionOfLaptops = ['hp', 'lenovo', 'dell'];

 console.log(collectionOfLaptops[2]);

  let myString = "kogboran";

function sum(a, b){
    let answer = a+b;
     answer;
}

let whatweget = sum (110, 120);
console.log(whatweget);

console.log(sum(5,5))





function sum(num1,num2)


