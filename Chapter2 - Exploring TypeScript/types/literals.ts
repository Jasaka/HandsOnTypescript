// literals and numeric literals are possible
let literal: "tom" | "linda" | "jeff" | "sue" = "linda";
literal = "sue";

console.log(literal);

// type aliases help with using literals
type Points = 20 | 30 | 40 | 50;
let score: Points = 20;

console.log(score);

// object literal type declaration
type ComplexPerson = {
    name: string,
    age: number,
    birthday: Date,
    married: boolean,
    address: string
}

let john: ComplexPerson = {
    name: "boop",
    age: 45,
    birthday: Date.prototype,
    married: true,
    address: "string"

};

console.log(john);