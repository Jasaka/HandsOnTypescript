type Run = (miles: number) => boolean;
let runner: Run = function (miles): boolean{
    if (miles > 10){
        return true;
    }
    return false;
}

console.log(runner(9));