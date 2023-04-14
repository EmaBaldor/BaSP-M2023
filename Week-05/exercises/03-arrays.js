// -------------------------------- 2 - Arrays ---------------------------------

/*  
----------------------------- Exercise 3-a -----------------------------
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
mostrar por consola los meses 5 y 11 (utilizar console.log).
*/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 

console.log(months[5], months[11])


/*  
----------------------------- Exercise 3-b -----------------------------
Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

console.log(months.sort())



/*  
----------------------------- Exercise 3-c -----------------------------
Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

months.unshift('Comienzo')
months.push('Fin')

console.log(months)



/*  
----------------------------- Exercise 3-d -----------------------------
Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

months.shift()
months.pop()

console.log(months)



/*  
----------------------------- Exercise 3-e -----------------------------
Invertir el orden del array (utilizar reverse).
*/

months.reverse()

console.log(months)



/*  
----------------------------- Exercise 3-f -----------------------------
Unir todos los elementos del array en un único string donde cada mes este 
separado por un guión - (utilizar join).
*/

var monthsSep = months.join('-')

console.log(monthsSep)



/*  
----------------------------- Exercise 3-g -----------------------------
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre 
(utilizar slice).
*/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 

var monthsCopy = months.slice(4,11);

console.log(monthsCopy)
