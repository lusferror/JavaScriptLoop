function sumTheElements(theArray){
	
	var total = 0;
	
	//your code here
	var largo=theArray.length;
	for(let i=0;i<largo;i++){
		total=total+theArray[i];
	}
	return total;
}
