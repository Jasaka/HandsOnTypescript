interface User {
    name: String;
    age: number;
}

function canDrive(user: User){
    console.log("user is", user.name);

    if (user.age >= 16){
        console.log("allow to drive");
    } else console.log("do not allow to drive");
}

const tom: User ={
    name: "tom",
    age: 17
}

canDrive(tom);