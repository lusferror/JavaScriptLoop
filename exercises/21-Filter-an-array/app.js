let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
var resultingNames= allNames.filter(function(nombre){
    if(nombre[0]=="R"){
        return nombre;
    }
})
console.log(resultingNames);