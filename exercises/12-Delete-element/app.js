var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below

var deletePerson= (nombre) =>{
    let newArray=[];
    newArray=people.filter((element) => element!=nombre);
    return newArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
