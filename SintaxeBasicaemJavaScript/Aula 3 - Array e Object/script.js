// O que são Vetores ou Arrays
// Como declarar um Array
// let array = ['string', 1, true];
// console.log(array);

//Pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array);

// forEach
//array.forEach(function(item, index){console.log(item, index)})

//push
// array.push('Novo Item');
// console.log(array);

//pop
// array.pop();
// console.log(array);

//shift
// array.shift();
// console.log(array);

//unshift
// array.unshift('novo item no inicio');
// console.log(array);

//indexOf
//console.log(array.indexOf(1));

//splice
// array.splice(0,2);
// console.log(array);

//slice
// let novoArray = array.slice(0,2);
// console.log(novoArray);

//Manipulando Objetos

let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno:{objetoInterno: "objetoInterno"}};
//console.log(object);   
// console.log(object.number); 

// var boolean = object.boolean;
// console.log(boolean);

//desestruturação

// var string = object.string;
// console.log(string);

var number = object.number;
console.log(number);

var {string, number, boolean, objectInterno} = object;
console.log(boolean);