console.log("before async");

async function delayedResult() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I completed successfully');
            reject('This didn\'t work');
        }, 500);
    });
}

console.log("before await");

(async function execAsyncFunc() {
    const result = await delayedResult();
    console.log(result);
})();
console.log("after await");