// combine types with &
let object: {name: string} & {age: number} = {
    name: 'Tom',
    age: 25
}

console.log("Intersection Type:");
console.log(object);

// give type options with |
let unionObject: null | {name: string} = null;
unionObject = { name: 'Jon'};

console.log("Union Type:");
console.log(unionObject);