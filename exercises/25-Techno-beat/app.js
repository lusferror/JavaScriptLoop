// Add your code here
function lyricsGenerator(arr){
    var contadorUno=0;
    var posicion=0;
    var cancion="";
    for(var i=0;i<arr.length;i++){
        if (arr[i]==0){
            cancion=cancion+"Boom ";
        }
        else if (arr[i]==1){
            cancion=cancion+"Drop the base ";
            contadorUno=contadorUno+1;
            if (contadorUno==3){
                cancion=cancion+"!!!Break the base!!! ";
            }
        }
    }
    
    return cancion;
        
};

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))