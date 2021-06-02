var Person = /** @class */ (function () {
    function Person(message) {
        this.message = message;
    }
    Person.prototype.speak = function () {
        console.log(this.message);
    };
    return Person;
}());
var tom = new Person("hello");
//tom.msg = "hello";
tom.speak();
