//-------------------Seccion 5----------------------------
function sumar (a,b){
    return a+b;
}
let total = sumar (10, 20);
console.log('El total es '+ total);

//-------------------Seccion 5.1----------------------------
//se usa la variable i porque es tradicion solamente, pero se puede usar cualquiera
for (let i = 1; i<=10; i++){
    let resultado = 2 * i;
console.log('2 x '+ i + ' = ' + resultado);
} 
function imprimirTabla(base, limite){
// tabla del 10
//let base = 10;
// limite de la tabla 20
//let limite = 20;

for (let i = 1; i<=limite; i++){
    let resultado = base * i;
console.log(base + ' x '+ i + ' = ' + resultado);
  } 
}
imprimirTabla(10,5);
imprimirTabla(3,10);
imprimirTabla(4,7);

//-------------------Seccion 5.2----------------------------
//let nota = 50;
function calcularNota(nota){
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
    }
    calcularNota(100);
    calcularNota(80);
    calcularNota(59);

//-------------------Seccion 5.3 Array----------------------------
let flores = ['Rosa','Girasol','Lirio'];
console.log(flores[0]);

//-------------------Seccion 5.4 Array----------------------------
let personas = ['Fer','Leo','Pablo'];
let salarios = [1000,1200,3000];
for (let i=0; i< personas.length; i++){
console.log(personas[i]+' tiene un salario de '+salarios[i]);
}

//-------------------Seccion 6 Arreglo objeto----------------------------
function describirPersona (p) {
    console.log(`${p.nombre} tiene ${p.edad} anios y mide ${p.estatura}`);
}
let persona = {
    nombre:'Hugo',
    edad: 29,
    estatura: 1.79
}

describirPersona(persona);

console.log('Persona definida');
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.estatura);

//-------------------Seccion 6.2----------------------------
let carro1 = {
    marca: 'Toyota',
    tipo: 'Sedan',
    puertas: 3
};
let carro2 = {
    marca: 'Honda',
    tipo: 'Civic',
    puertas: 4
};
let carro3 = {
    marca: 'Mazda',
    tipo: 'Sedan',
    puertas: 5
};

class Carro {
    constructor(marca1,tipo1,puertas) {
    this.marca = marca1;
    this.tipo = tipo1;
    this.puertas=puertas;
    this.creadoEn='hoy';
    this.encendido=false;
    this.gas=100;
}
 
encenderCarro(){
    if (this.encendido) {
        console.error('El carro YA esta encendido');
     } else {
    this.encendido=true;
    console.log('El carro esta encendido');
    }
    return this;
}

realizarViaje(consumo){
//optimizacion del codigo de abajo
 if (!this.encendido) return console.log('Carro apagado'); 
 // esto de arriba reemplaza a el if de encendido y else con la leyenda de carro esta apagado.
 if (consumo>this.gas) return  console.log('No puedo realizar el viaje. Gasolina: ' + this.gas);
 // esto de arriba reemplaza a if (consumo>this.gas){
   /*if (this.encendido){
    if (consumo>this.gas){
        console.log('No puedo realizar el viaje. Gasolina: ' + this.gas);}
        else {*/
this.gas = this.gas - consumo;
 return 'Le queda '+this.gas}
   /*} else {
       console.log('El carro esta apagado');
   }
 }*/
}

let carro = new Carro('Gol','Sedan',5);
console.log(carro1);
console.log(carro);

//-------------------Seccion 7.1----------------------------
// conversiones

let libras = 160;
//let kg
let kb = libras*0.453592;

/*kg *= 100;
kg = Math.round(kg);
kg /= 100;*/

console.log(kb);


let km = 160;
let mi = km*0.62;
console.log(mi);

// area de triangulo

let base = 10;
let altura = 5;

let area =(base*altura)/2;
console.log(area);

//ciclo for para determinar el mayor numero
let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 
let mayor2 = -999999;

for (let i = 0; i<=numeros.length; i++){
    if (numeros [i]>= mayor2){
        mayor2 = numeros [i];
    }

} 
console.log('El mayor numero es: '+ mayor2);
//numeros impares o pares
let numeros1 = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 

for (let i = 0; i<numeros1.length; i++){
    let numero = numeros1 [i];
    if ((numero % 2) === 0){
        console.log('El numero par es: '+ numero);    } 

 else {
    console.log('El numero impar es: '+ numero);
}
}

//tabla de multiplicacion

for (let i = 1; i<=5; i++){
    let reglon = '';
    for (let j = 1; j<=5; j++) {
        reglon += `${j*i}     `;
    }
    console.log(reglon)
}

//3 argumentos numéricos ( a, b, c)

function max(a,b,c){
    let mayor;
    if ( a > b){
        if (a > c){
            mayor = a;
        } else {
            mayor = c;
        }}
    else {
        if(b>c){
            mayor = b;
        } else {
            mayor = c;
        }
    }    
        return mayor;
}
let mayor = max(10,21,6);

console.log(mayor); // 6

// debe de retornar el nombre que tenga más letras del arreglo
function masLargo(arr){

let nombreLargo='';
for (let i=0; i<arr.length;i++){
    let nombre = arr[i];
    if( nombre.length > nombreLargo.length ){
        nombreLargo = nombre;
    }
}
return nombreLargo;
}
let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let heroeLargo = masLargo(heroes);
console.log(heroeLargo); //   Profesor Charles Xavier

// ﬁltrando todos los nombres que empiezan con una determinada letra.

function ﬁltrarPorLetra (arr1,letra){
    let nuevoArr = [];
    for (let i = 0;i<arr1.length;i++){
        let nombre1 = arr1[i];
        if (nombre1[0]===letra){
            nuevoArr.push (nombre1);
        }
    }
    return nuevoArr;
}

let heroes1 = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesCon = ﬁltrarPorLetra( heroes1, 'S'); 
console.log( heroesCon ); // She Hulk, Spiderman

