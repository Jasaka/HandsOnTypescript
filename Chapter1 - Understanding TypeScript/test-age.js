function canDrive(user) {
    console.log("user is", user.name);
    if (user.age >= 16) {
        console.log("allow to drive");
    }
    else
        console.log("do not allow to drive");
}
var tom = {
    name: "tom",
    age: 17
};
canDrive(tom);
