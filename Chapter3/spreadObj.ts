namespace NamespaceA {
    class A {
        aName: string = "A";
    }

    class B {
        bName: string = "B";
    }


    const a = new A();
    const b = new B();
    const c = { ...a, ...b};
    const d = Object.assign(a,b);    // Target ES6

    console.log(c);
    console.log(d);

    a.aName = 'a1';
    console.log(c);
    console.log(d);
}