import { Saludar,PI, usuario } from "./constantes.js";
console.log(PI,usuario);

import { aritmetica as calculos } from "./aritmetica.js";
//import { aritmetica as calculos } from "./aritmetica.js";
console.log("Archivo modulos.js");
console.log(PI, usuario);
//console.log(aritmetica.sumar(3, 4));
console.log(calculos.sumar(3, 4));
console.log(calculos.restar(3, 4));
//saludar();
let saludo = new Saludar();
saludo;


