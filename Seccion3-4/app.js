//---------Seccion 3----------------------
//console.log('Hola Hugo');
let c;
let f = 90;
c = (f - 32) * (5/9);

console.log(c);

//-------------------Seccion 4----------------------------
let nombre = 'Hugo';
let apellido = 'Manzoni';
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

let a = 10;
let b = 20;
console.log(a+b);

let activo = true;
let despedido = false;

//-------------------Seccion 4.1----------------------------
let nota1 = 60;
if (nota1 >= 60) {
    console.log('El alumno aprueba la clase');
}
else if (nota1 < 50) {
        console.log('Por favor estudie más');
}
else{
    console.log('El alumno no aprueba la clase'); 
} 

console.log('Fin del programa');

//-------------------Seccion 4.2----------------------------
let nota = 50;
let notaLetra = '';
if (nota>= 90){
    notaLetra = 'A';
} else if (nota>= 80){
    notaLetra = 'B';
} else if (nota>= 70){
    notaLetra = 'C';
} else if (nota>= 60){
    notaLetra = 'D';
} else {
    notaLetra = 'F';
}
console.log(nota + ' es igual a '+notaLetra);

//-------------------Seccion 4.3----------------------------
let dia = 10; //1=lunes, 2=martes...
switch (dia){
    case 0:
    console.log('Es domingo');
    break; 
    case 1:
    console.log('Es lunes');
    break;
    case 2:
    console.log('Es martes');
    break;
    case 3:
    console.log('Es miercoles');
    break;
    case 4:
    console.log('Es jueves');
    break;
    case 5:
    console.log('Es viernes');
    break;
    case 6:
    console.log('Es sabado');
    break;
    default:
    console.log('El dia no es valido');
}

//-------------------Seccion 4.4----------------------------
let gas = 5; //gasolina

while (gas>0){
    gas--; // Es lo mismo poner gas = gas-1;
    console.log('Gasolina restante '+ gas);
}
console.log('Se termino la gasolina');


let gas1 = 5; //gasolina
while (gas1>0){
    console.log('Gasolina restante '+ gas1);
    gas1--; // Es lo mismo poner gas = gas-1;
    
}
console.log('Se termino la gasolina');

//-------------------Seccion 4.5----------------------------
//se usa la variable i porque es tradicion solamente, pero se puede usar cualquiera
for (let i = 1; i<=10; i++){
    let resultado = 2 * i;
console.log('2 x '+ i + ' = ' + resultado);
} 

// tabla del 10
let base = 10;
// limite de la tabla 20
let limite = 20;

for (let i = 1; i<=limite; i++){
    let resultado = base * i;
console.log('10 x '+ i + ' = ' + resultado);
} 

