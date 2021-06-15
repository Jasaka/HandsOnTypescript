const allTrucks = [
    2, 5, 7, 10
]

const allTonnage = allTrucks.reduce((totalCapacity, currentCapacity) => {
    if (currentCapacity > 5)
        totalCapacity = totalCapacity + currentCapacity;
    else
        totalCapacity = totalCapacity - currentCapacity;
    return totalCapacity;
}, 0);
console.log(allTonnage);