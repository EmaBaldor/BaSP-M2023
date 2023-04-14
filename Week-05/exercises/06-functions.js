// -------------------------------- 6 - Functions ---------------------------------

/*  
----------------------------- Exercise 6-a -----------------------------
Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor 
de dicha variable en la consola del navegador.
*/

function suma(num1, num2){
    return num1 + num2;
}

var result = suma(2,3);

console.log('Exercise 6-a: ' + result);



/*  
----------------------------- Exercise 6-b -----------------------------
Copiar la función suma anterior y agregarle una validación para controlar 
si alguno de los parámetros no es un número; de no ser un número, mostrar 
un alert aclarando que uno de los parámetros tiene error y retornar el valor 
NaN como resultado.
*/

function suma(num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        alert("Exercise 6-b: A parameter is wrong.");
        return NaN;
    } else {
        return num1 + num2;
    }
}

var result = suma(2,3);

console.log('Exercise 6-b: ' + result);



/*  
----------------------------- Exercise 6-c -----------------------------
Crear una función “validateInteger” que reciba un número como parámetro y 
devuelva verdadero si es un número entero.
*/

function validaInteger(num){
    return Number.isInteger(num);
}

var result = validaInteger(5);

console.log('Exercise 6-c: ' + result);



/*  
----------------------------- Exercise 6-d -----------------------------
Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada 
a la función del ejercicio 6c. y que valide que los números sean enteros. 
En caso que haya decimales mostrar un alert con el error y retornar el número 
convertido a entero (redondeado).
*/

function sumaValid(num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        alert('Exercise 6-d: A parameter is wrong.');
        return NaN;
    } else {
        if ((validaInteger(num1)) && (validaInteger(num2))){
            return num1 + num2;
        } else{
            alert('Exercise 6-d: Error, non-integer numbers. They will be converted to integers to add them.');
            var int1 = Math.round(num1);
            var int2 = Math.round(num2);
            return  int1 + int2
        }  
    }
}

var result = sumaValid(2,3.1);

console.log('Exercise 6-d: ' + result);



/*  
----------------------------- Exercise 6-e -----------------------------
Convertir la validación del ejercicio 6d) en una función separada y llamarla 
dentro de una nueva función probando que todo siga funcionando igual que en 
el apartado anterior.
*/


function validNum(num){

    if (isNaN(num)){
        alert('Exercise 6-e: Error, a parameter(' + num + '). Is not number.');
        return NaN;
    } else {
        if (validaInteger(num)){
            return num;
        } else{
            alert('Exercise 6-e: Error, non-integer number. (' + num + '). Converts to integer.');
            num = Math.round(num);
            return  num
        }  
    }
}


function onlySum(num1, num2){
    return  validNum(num1) + validNum(num2)     
}

var result = onlySum('a',3.2);

console.log('Exercise 6-e: ' + result);