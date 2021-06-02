class Person {
    constructor(private readonly message: string) {
    }

    speak() {
        console.log(this.message);
    }
}

const tom = new Person("hello");
//tom.msg = "hello";
tom.speak();