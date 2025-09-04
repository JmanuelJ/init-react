const arreglo = [1,2,3,5];

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

arreglo2.push(5);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);