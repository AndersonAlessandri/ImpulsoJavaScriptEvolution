// var numberOne = 1;
// console.log(numberOne + 1);


//Var e Let

var a = 1;
var b = 2;

if (a === 1){
    var a = 11; //the scope global
    let b = 22; //the scope is inside the if-block

    console.log(a); //11
    console.log(b); //22
}

console.log(a); //11
console.log(b); //2