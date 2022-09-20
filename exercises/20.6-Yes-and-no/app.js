let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
var asingar=function evaluar(numero){
    if(numero==0){
        return "woko";
    }
    else if (numero==1){
        return "wiki";
    }
}
var newArray=theBools.map(asingar);
console.log(newArray);