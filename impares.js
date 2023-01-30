//Mostrar la suma elementos impares
let nums = [10,50,8,4];                                                 //declaramos una variable con un array de tipo number
impar = 0                                                               //una variable con el nombre impar, donde se guardará la suma de todos los números impares
for (let i = 0; i < nums.length; i++){                                  /*para obtener la suma de todos los números impare, utilizaremos el bucle for para que al sumar el primer número del array este avancea la siguiente posición y sume todos hasta que la condición no ya no se cumpla y el bucle termine*/
    if(nums[i] % 2 == 1)                                                /*if es la sentecia que dice si los numeros dentro del array se dividen para dos y su reciduo es igual a 1 podrán... en palabras simples pasar o no*/
    { impar = impar + nums[i] }                                         /*los números que cumplieron la condición pasaran a la suma de todos los impares*/ 
}
console.log(impar);                                                     /*esto mostrará la suma de todos los elementos impares en la consola del navegador*/

let numss = [3,8, 5, 4]
impar = 0
for (let i = 0; i < numss.length; i++) {
    if(numss[i] % 2 == 1)
    { impar = impar+numss[i] }
      }
       console.log(impar)


//. Mostrar suma índices pares

let nm = [10,50,8,4]                                                     //declaramos un array 
índicesPares = 0                                                         /*una variable de indices pares*/
for (let i = 0; i < nm.length; i++) {                                    /*para tener la suma de indices pares usamos el bucle for, declarando que el indice es igual a 0, la condición de que i tiene que ser menor a el número de elementos y si cumple la condición el indice se sumará mas 1 para que se repita hasta que el indice no sea menor a la cantidad de elementos*/ 
    if(i % 2 == 0)                                                       /*es ta vez en la condición si pondermos que la possicion se divida para 2 y que el residuo sea 0 dando así una división exacta caso contrario la condicion no dejará pasar a los numeros que no tengan un residuo de 0*/
    { índicesPares = índicesPares + nm[i] }                              /*los números que si cumpliero la condicio se sumarán*/
      }
       console.log(índicesPares)                                         /*en la consola del navegador mostrará la suma de los índices pares*/



//Mostrar la suma elementos mayores a 10

let elem = [10,50,8,4]                                                   //declaramos un array
mayores = 0                                                              /*una variables para los elementos mayores a 10*/
for (let i = 0; i < elem.length; i++) {                                  /*para mostrar la suma de los elementos mayores a 10 aplicamos el bucle for*/
    if(elem[i] > 10)                                                     /*la condición cambia  a si los elementos mayores a 10 podrán seguir */
    { mayores= mayores + elem[i] }                                       /*se suman todos los elementos mayores a 10*/
      }
       console.log(mayores)                                              /*mostrará la suma que en este caso es 50*/

//. Mostrar la suma de los índices donde el emento es 0
                                                  
let elemento  = [1,1,0,0]                                                /*declaramos el array*/ 
indice = 0                                                               /*variable para el resulado de la suma*/
for (let i = 0; i < elemento.length; i++) {                              /*usamos el bucle de for*/
    if(i > 1 || i == 3 )                                                 /*la condicion if junto con or (||) que quiere decir que pasaran la possición mayor a 1 o la igual a 3*/
    { indice = indice + i }                                              /*se suma las posiciones que pasaron la condición de if que en este caso son 2 y 3*/
      }
       console.log(indice)                                               /*el resultado de la suma es 5*/

//Mostrar la suma elementos múltiplos de 3

let mult = [12,3,5,7]                                                    /*array declarada*/
m3 = 0                                                                   /*variable que contendra la suma de los elementos múltiplos de 3*/
for (let i = 0; i < mult.length; i++) {                                  /*usamos el bucle for*/
    if(mult[i] % 3 == 0)                                                 /*la condicio de si los elementos que se dividen para 3 y con un residuo de 0 pasarán*/
    { m3 = m3 +mult[i] }                                                 /*la suma de m3 + los elementos multiplos de 3*/
      }  
       console.log(m3);                                                  /*el resultado es de 15 porque 12 y 3 son multiplos de 3 */

//6. Mostrar la suma elementos que no sean múltiplos de 7

nums=[12,14,5,7];                                                        /*array*/
multiplos = 0                                                            /*variable para la respuesta de la suma de elementos que no sean múltiplos de 7*/
for( let i = 0;i < nums.length; i++ ){                                   /*bucle for*/
    if(nums[i] % 7 != 0)                                                 /*la condición if que dice: si los elementos que se pueden dividir para 7 y dando como residuo un numero diferente de 0 serán seleccionados para avanza*/
    {multiplos = multiplos + nums[i]}                                    /*suma de los multiplos + los elementos 12 y 5 que no son múltiplos de 7*/
}
console.log(multiplos);                                                  /*respuesta a la suma de los que no son multiplos de 7*/



//Mostrar la suma de los elementos donde y el índice sean iguales


let el = [2,1,4,3]                                                       /*array*/
let igual = 0                                                            /*variable para la respuesta de la suma de los elementos donde los elemento y ele índice sean iguales*/
for (let i = 0; i < el.length; i++) {                                    /*bucle for*/
    if(el[i] == i)                                                       /*la condición dice que solo se sumaran los elementos que sean iguales a le índice*/
    { igual = igual + el[i] }                                            /*los elementos que cumplieron la condición se sumarán con la variable que es 0 por tanto 0 + 4 = 4*/
}
console.log(igual);                                                      /*la respuesta que saldrá será 4 ya que el indice 1 y el 3 son iguales a los elementos y por eso se suman esos dos*/



//Mostrar la suma de los elementos donde el índice sea mayor al elemento


let elmentomayor = [0,2,1,1]                                            /*declaración del array*/
let índice = 0                                                          /*variable indice = 0*/
for (let i = 0; i < elmentomayor.length; i++) {                         /*Bucle for*/
    if(i > elmentomayor[i])                                             /*si el indice es mayor que los elementos seguirá*/
    { índice = índice + elmentomayor[i] }                               /*la suma de la variable índice se sumará con el elemento mayor quedando 2*/
}
console.log(índice);                                                    /*se imprime la respuesta */

// Mostrar la suma de los índices donde el índice sea menor al elemento

let elementos = [0,2,1,4]                                              /*array de la índices menores a el elemento*/
let menorind = 0                                                       /*variable para la respuesta*/
for (let i = 0; i < elementos.length; i++) {                           /*bucle for*/
    if(elementos[i] > i)                                               /*si los elementos son menores a i procedera a seguir con la sentencia*/
    { menorind = menorind + i}                                         /*se suma la variable que es 0 mas los indices quedando a 4*/
}
console.log(menorind)                                                  /*respuesta de la suma*/


/*Adicionalmente resolver un programa que emule el funcionamiento de un cajero automatico utilizando DO-WHILE en javascript (investigar).*/ 

do{
    let pasword = 1
    let contraseña = prompt("introduzca la constraseña es 1");
        if(contraseña != pasword)  alert ("contraseña incorrecta"), alert("introduzca la contraseña otra vez");
    {if(contraseña == pasword ) alert ("bienvenido");} 
    {let saldo = 100
    let retiro = prompt("introduzca la cantidad que desea retirar");}                  //no entiendo y ya probe lo que pude xd
}while(contraseña == pasword)

        
      
     