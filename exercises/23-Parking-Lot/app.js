

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(estacionamiento){
  var objeto={totalSlots:0,availableSlots:0,occupiedSlots:0};
  var transito=0;
  for(var i of estacionamiento){
    for(var j of i){
      if(j==2){
        objeto.availableSlots=objeto.availableSlots+1;
      }
      else if (j==1){
        objeto.occupiedSlots=objeto.occupiedSlots+1;
      }
      else{
        transito=transito+1;
      }
      objeto.totalSlots=objeto.totalSlots+1;
    }
    
  }
  objeto.totalSlots=objeto.totalSlots-transito;
  return objeto;

}

console.log(getParkingLotState(parking_state))