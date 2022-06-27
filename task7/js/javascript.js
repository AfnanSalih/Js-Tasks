let string ="AfnanSalih";
console.log(string);
let stringlowercase = string.toLocaleLowerCase();
console.log(stringlowercase);

document.getElementById("slice").innerHTML = stringlowercase.slice(0,1);
document.getElementById("substring").innerHTML = stringlowercase.substring(0,1);
document.getElementById("index").innerHTML = stringlowercase[0];
document.getElementById("charAt").innerHTML = stringlowercase.charAt(0);

const myarray = stringlowercase.split("");
document.getElementById("split").innerHTML = myarray[0];
document.getElementById("match").innerHTML = stringlowercase.match(/a/);



