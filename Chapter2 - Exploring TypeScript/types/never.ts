function oldEnough(age: number): boolean |never {
    if (age > 59){
        throw Error("Too old!")
    }
    return age > 18;

}

console.log(oldEnough(78));
console.log(oldEnough(19));