//PROBLEMA 1

let num1 = prompt("Introduzca el primer numero");
let num2 = prompt("Introduzca el segundo numero");
let resta = parseInt(num1) - parseInt(num2) ;
let multiplicacion = parseInt(num1) * parseInt(num2) ;

alert(`La resta de ambos numeros es ${resta} y su multiplicacion es ${multiplicacion}`);

//PROBLEMA 2

let nombre = prompt("Ingrese su nombre: ")

if (nombre.includes("a") && nombre.includes("m")){
    alert(`${nombre} contiene A y M`)
}
else if (nombre.includes("a")) {
    alert(`${nombre} contiene solo A`)
}
else if (nombre.includes("m")){
    alert(`${nombre} contiene solo M`)
}
else{
    alert(`no contiene ninguna de las dos`)
}

//PROBLEMA 3

let frase = "Pablito-clavo-un-clavito";
let nuevafrase = frase.replace(/-/g," ");

alert(nuevafrase);
