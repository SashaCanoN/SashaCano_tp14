const array = ["Lavaropas", "Heladera", "Microondas", "Tostadora", "Juguera", "Procesadora"];
// incico A
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//inciso  B
let i1 = array.shift();
array.push(i1);
console.log(array);
//inciso C
array.push("Waflera","Licuadora"); 
console.log(array);
// inciso D
console.log(`La cantidad de elementos es ${array.length}`);
// inciso E
// let buscarElemento = "Tostadora";
let buscarElemento = "Procesadora";

if(array.includes(buscarElemento)){
    console.log("Producto encontrado.");    
}
else{
    console.log("El producto buscado no existe.");
}
//inciso F
let arraysUnif = array.join(' ');
console.log(arraysUnif);
// inciso G
let cantidadCaracteres = arraysUnif.length;
console.log(`Hay ${cantidadCaracteres} cantidad de caracteres`);
//inciso  H
arraysUnif = arraysUnif.replace("Waflera", "Lavaropas");
console.log(arraysUnif);
//inciso I
let newArray = arraysUnif.split(', ')
console.log(newArray);