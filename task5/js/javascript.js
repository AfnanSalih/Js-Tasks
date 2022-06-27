let a = 100000;
document.getElementById("num-tostring").innerHTML =
 a.toString();

 document.getElementById("num-fixed").innerHTML = 
 a.toFixed(0);

 document.getElementById("num-parseint").innerHTML = 
 parseInt("100000 hello");

 document.getElementById("num-parsefloat").innerHTML = 
 parseFloat("100000.0 hello");

 document.getElementById("num-round").innerHTML = 
 Math.round(100000.345);

 document.getElementById("num-floor").innerHTML = 
 Math.floor(100000.645);

 
 document.getElementById("num-power1").innerHTML = 
 Math.pow(10,5);

 document.getElementById("num-power2").innerHTML = 
 10**5;

 document.getElementById("num-number").innerHTML = 
 Number("100000");

 document.getElementById("num-localstring").innerHTML = 
 a.toLocaleString();

 document.getElementById("num-precision").innerHTML = 
 a.toPrecision(6);
 
 document.getElementById("num-valueof").innerHTML = 
 a.valueOf();

 document.getElementById("num-exponential").innerHTML = 
 a.toExponential();
 




