interface HasLength {
    length: number;
}
function getLength<T extends HasLength>(arg: T): number {
    return arg.length;
}

// constraining the function with the interface catches the missing length of number
// console.log(getLength<number>(22));
console.log(getLength("Hello world."));