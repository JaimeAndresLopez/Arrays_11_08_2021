// let array = [];

// array["Nombre"]="Jaime";
// array["Apellido"]="Lopez";
// array["Edad"]=28;
// const data = Object.entries(array);
// array.forEach(element =>{
//     console.log(element);
// })
// console.log(array);
//  console.log(Object.entries(array));
//  console.log(Object.values(array));
//  console.log(Object.keys(array));
// console.log(data);

// for(let[indice, valor] of Object.entries(array)){
//         console.log(indice,valor);
// }

// const lista = [
//     "Jaime",
//     "Lopez",
//     28,
//     ({...arg})=>{
//         return `Hola ${arg.nom}! Como estas?`;
//     }
// ];

// lista.forEach(function(e) {
//     console.log(e);
// });

// lista.forEach((valor, indice, array)=>{
//     console.log(valor, indice, array);
//     if(typeof valor == "function"){
//         console.log(valor({nom: lista[0]}));
//     }
// });

// let valor = lista.forEach();
// console.log(valor);

// const informacion = ["Jaime", "Lopez", "Chacon", 28];

// let data = informacion.map(valor=>{
//     if(valor == "Lopez"){
//         return "Lopez Chacon";
//     }else{
//         return valor;
//     }
// });
// console.log(data);

let datos = [1,2,3,4,[2,2,3,4,'a'],5,6,7,8,['a',2],9,10];

let almacenar = [];
const respuesta = datos.some((value,indice,array)=>{
    if(value[1] == 2){
        almacenar.push(array[indice]);
    }
});

console.log(datos);
console.log(almacenar);