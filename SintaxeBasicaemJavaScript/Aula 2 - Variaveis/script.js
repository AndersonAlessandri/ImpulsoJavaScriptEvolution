//tipos primitivos

//boolean

var VouF = false;
//console.log(VouF);
console.log(typeof(VouF));

//number
var numeroQualquer = 1;
//console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

//string
var nome = 'Anderson';
console.log(typeof(nome));

//como declarar

// var variavel = 'Anderson';
// var variavel = 'Alessandri';
// console.log(variavel);

const variavel = 'Anderson' ;
console.log(variavel);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//Atribuição

var nome = 'Meu Nome';
console.log(nome);

//Comparação

var comparacao = '0' == 0;
console.log(comparacao);

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//Operadores Aritméticos
// + Adição
var adicao = 1 + 1;
console.log(adicao);
// - Subtração
var subtracao = 2 - 1;
console.log(subtracao);
// * Multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);
// / Divisão Real
var divisaoReal = 6/2;
console.log(divisaoReal);
// % Divisão Inteira ou Resto
var divisaoInteira = 5%2;
console.log(divisaoInteira);
// ** Potenciação
var potenciacao = 2**10;
console.log(potenciacao);

//Operações Relacionais
// > maior que;
var maiorQue = 5>2;
console.log(maiorQue);
// < menor que;
var menorQue = 5<2;
console.log(menorQue);
// >= maior ou igual a;
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);
// <= menor ou igual a;
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

//Operadores Lógicos
// && - 'e'
var e = true && false;
console.log(e);
// || - 'ou'
var ou = true || false;
console.log(ou);
// ! - 'não'
var nao = !true;
console.log(nao);
