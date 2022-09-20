let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person){
	var hoy=new Date();
	var old=hoy.getFullYear()- person.birthDate.getFullYear();
	if (person.name=="Joe"){
		return (`Hello, my name is ${person.name} and I am ${old-1} years old`);
	}
	else{
		return (`Hello, my name is ${person.name} and I am ${old} years old`);
	};
	}
	

console.log(people.map(simplifier));