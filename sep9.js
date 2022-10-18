/* A variable name can also start with $, _, or any letter

Javascript is case sensitive

Data Types - numbers, strings, boolean , object, array

UNDEFINED is a data type for variables that are declared but has not been assigned a value;

 = is called assignment operator in javascript
 == is called equals operator;

 we have other mthematical operators -> ++, --,

 ASSIGNMENT OPERATOR
 +=; -=, *=, /=;









*/
let x = 10;
x+5;
 console.log(x) //here, our x is still 10 because we have not changed the value of x which is 10;

x = x+5;
// our x will now bw 15;

// x = x+5 is the samething when you write x += 5;
// Also x = x+1 is the same thing as x++ or ++x;
// Note that ++x is different from x++ as ++x will instantly increase x by 1 but x++ will later increase x by 1;



let y; 

console.log(typeof(y)) // Here, undefined will be printed out in the console because we have not assigned any value to y;

let z = 10;
let w = 100;
let v = 200;
w += 20 ;
z+=30; // z = z+30
v+40; 

console.log(z); // expected output 40
console.log(w); // expected output 120
console.log(v); //expected output 200


let a = 10;
let b = 100;
let c = 200;
let d = 150;
b -= 20 ; // b = b-20;
a -= 3; // a = a-3;
console.log(c--); // expected output -> 200;
console.log(--d); // expected output -> 149;

console.log(z); // expected output 40
console.log(w); // expected output 120
console.log(c); //expected output 199


//OBJECT DATA TYPE
/*
{
 PROPERTY NAME: VALUE,
 PROPERTYNAME : VALUE,

}


*/

let abdullahi = {
    name: "Alabi Abdullahi",
    age : 13,
    favoriteFood: "Dodo Ikire",
}

console.log(abdullahi.age); // 13;
console.log(abdullahi.favoriteFood); //"DODO IKIRE"

// ARRAY DATA TYPE -> collection of items [] elements

let laptopsInElegance = ['hp', 'lenovo', 'fujitsu', 'dell', 10, {}];

let studentsName = ['Peace', 'Ayomide', 'Malik']

console.log(laptopsInElegance[0]); // hp
console.log(laptopsInElegance[1]); //lenovo
console.log(laptopsInElegance[2]); //fujitsu
console.log(laptopsInElegance[4]); //10
console.log(studentsName.length); //3

//write an object about yourself -> your fav food, your school, your name
//wite an array containing fed universities in southwest;


