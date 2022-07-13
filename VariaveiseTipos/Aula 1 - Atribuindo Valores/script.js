//Var e Let

// ls

var firstName = "João";
var lastName = "Souza";

 if (firstName === 'João'){
     var firstName = "Pedro"; // var funciona global
     let lastName = "Silva"; //Não está lendo o let, pois só funciona em escopo de bloco
 }

 console.log(firstName, lastName);