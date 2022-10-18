function convertToNumber(anyword){

//let answer = parseInt(anyword);
let answer = parseFloat(anyword);
return answer;

}

console.log(convertToNumber("Abdullahi") )//NaN
console.log(convertToNumber("123")        ) // 123
console.log(convertToNumber("20Abdullahi"))     // 20
console.log(convertToNumber("rid1onidodo")) //NaN

function convertToString(toconvert){
    console.log("tHIS TIME AROUND, mY TO CONVERT IS "+toconvert);
    console.log(typeof(toconvert));

    let answer = toconvert.toString(2);
    console.log(typeof(answer));
    return answer;

}
console.log(convertToString(30));
console.log(convertToString(true));

function nickName(ade){
    let answer = ade.toString();
    console.log(typeof(answer));
    alert(answer);
    return answer;
}
console.log(nickName(10))



//toString(2);
function convertToOpposite(anynumber){
let answer = anynumber * -1;
return answer;
}

console.log(convertToNumber(9))

function convertToUpperCase(anystring){
    let answer = anystring.toUpperCase();
    return answer;
    
}

console.log(convertToUpperCase("grid"));
console.log(convertToUpperCase("BanaNa"));