function getEmployee(id){

    return{
        name: 'John',
        age: 35,
        address: '123 St',
        country: 'United States'
    }
}

function getEmployeeWorkInfo(id){
    return [id, 'Office St', 'France'];
}

const {name: fullName, age: age} = getEmployee(22);
console.log('employee', fullName, age);

const [id, officeAddress] = getEmployeeWorkInfo(33);
console.log('employee', id, officeAddress);