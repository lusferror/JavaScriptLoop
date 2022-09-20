

var myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here

function myFunction(numero){
    var resultado=numero*3;
    return resultado;
}
var newArray= myNumbers.map(myFunction);
console.log(newArray);