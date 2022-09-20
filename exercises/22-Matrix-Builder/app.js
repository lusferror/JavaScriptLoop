// Code goes here
function matrixBuilder(numero){
    var matriz=[];
    var subMatriz=[]
    for(let i=0; i<numero;i++){
        for(let j=0;j<numero; j++){
            
            subMatriz[j]=Math.floor(Math.random()*2);
        }
        matriz[i]=subMatriz;
    }
    return (matriz);
}

// do not change anything from this line down
console.log(matrixBuilder(5));