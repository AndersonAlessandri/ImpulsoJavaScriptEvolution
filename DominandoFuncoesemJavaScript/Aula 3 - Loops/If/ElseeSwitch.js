function numeroPositivo(num) {
    let resultado;

    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }
    return resultado;
}
numeroPositivo(2)
 //true

numeroPositivo(-9)
//false


function getAnimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}