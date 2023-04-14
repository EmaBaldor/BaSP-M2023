// -------------------------------- 2 - Strings ---------------------------------

/*  
----------------------------- Exercise 2-a -----------------------------
Crear una variable de tipo string con al menos 10 caracteres y convertir 
todo el texto en mayúscula (utilizar toUpperCase).
*/


var str = 'convertiramayuscula';

strCletter = str.toUpperCase()

console.log(strCletter);


/*  
----------------------------- Exercise 2-b -----------------------------
Crear una variable de tipo string con al menos 10 caracteres y generar un 
nuevo string con los primeros 5 caracteres guardando el resultado en una 
nueva variable (utilizar substring).
*/

var str = 'cincocaracteres';

var strShort = str.substring(0,5);

console.log(strShort);


/*  
----------------------------- Exercise 2-c -----------------------------
Crear una variable de tipo string con al menos 10 caracteres y generar un 
nuevo string con los últimos 3 caracteres guardando el resultado en una 
nueva variable (utilizar substring).
*/

var str = 'trescaracteres';

var strShort = str.substring(str.length - 3);

console.log(strShort);

/*  
----------------------------- Exercise 2-d -----------------------------
Crear una variable de tipo string con al menos 10 caracteres y generar un 
nuevo string con la primera letra en mayúscula y las demás en minúscula. 
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).
*/

var str = 'primerLetraMayuscula';

var firstLetter = str.substring(0,1);

var restLetters = str.substring(1);

var strComplete = firstLetter.toUpperCase() + restLetters.toLowerCase();

console.log(strComplete);

/*  
----------------------------- Exercise 2-e -----------------------------
Crear una variable de tipo string con al menos 10 caracteres y algún espacio 
en blanco. Encontrar la posición del primer espacio en blanco y guardarla en 
una variable (utilizar indexOf).
*/

var str = 'buscarEspacio enBlanco';

var position = str.indexOf(' ');

console.log(position);

/*  
----------------------------- Exercise 2-f -----------------------------
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres 
y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores 
para generar un nuevo string que tenga la primera letra de ambas palabras en 
mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
toLowerCase y el operador +).
*/

var str = 'palabras mayuscula';

// Encontramos la posicion donde termina la primer palabra 
var position = str.indexOf(' ');

// Obtenemos la primer letra a convertir (A mayuscula)
var first = str.substring(0,1);

// Obtenemos el resto de la primer palabra (A minuscula)
var restFirst = str.substring(1,position + 1);

// Obtenemos la segunda letra (A mayuscula) 
var second = str.substring(position + 1, position + 2);

// Obtenemos el resto de la segunda palabra (A minuscula)
var restSecond = str.substring(position + 2);

// Completamos
strComplete = first.toUpperCase() + restFirst.toLowerCase() + second.toUpperCase() + restSecond.toLowerCase();

console.log(strComplete);

