const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Asyngc!'), 2000)
        : reject(new Error('Error'));
    })
}

const anotherFn = async () => {
    console.log('starting');
    const something = await fnAsync();
    console.log(something);
    console.log('hello!');
}

console.log('before');
anotherFn();
console.log('after');