// ------------------------- 1 - Variables and Operators -------------------------

console.log('Exercises 1-variables-and-operators.js');

/*  
----------------------------- Exercise 1-a -----------------------------
Crear dos variables numéricas y utilizar el operador suma para guardar 
el valor de la suma de ambos números en una 3er variable.
*/

console.log('Exercise 1-a:');

var num1 = 2;
var num2 = 3;
var sum;

sum = num1 + num2;

console.log(sum);


/*  
----------------------------- Exercise 1-b -----------------------------
Crear dos variables de tipo String y concatenarlas guardando el resultado 
en una 3er variable.
*/

console.log('Exercise 1-b:');

var str1 = 'uno';
var str2 = 'dos';
var str3;

str3 = str1 + str2;

console.log(str3);

/*  
----------------------------- Exercise 1-c -----------------------------
Crear dos variables de tipo String y sumar el largo de cada variable 
(cantidad de letras del string) guardando el resultado de la suma en 
una 3er variable (utilizar length).
*/

console.log('Exercise 1-c:');

var str1 = 'uno';
var str2 = 'dos';
var strLong;

strLong = str1.length + str2.length;

console.log(strLong);