// 3 estados tiene una promesa
// pendiente
// cumplido
// ha sido rechazado

/*const promise = new Promise(function(resolve, reject) {
    resolve('hey!')
})
*/

const cows = 5;

const countCows = new Promise(function(resolve, reject) {
    if ( cows > 10 ) {
        resolve(`We hace ${cows} cows on the farm`);
    } else {
        reject(`There is no cows on the farm`);
    }
});

countCows.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally');
});