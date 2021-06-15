var allTrucks = [
    2, 5, 7, 10
];
var allTonnage = allTrucks.reduce(function (totalCapacity, currentCapacity) {
    if (currentCapacity > 5)
        totalCapacity = totalCapacity + currentCapacity;
    else
        totalCapacity = totalCapacity - currentCapacity;
    return totalCapacity;
}, 0);
console.log(allTonnage);
