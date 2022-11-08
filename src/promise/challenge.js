import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
};

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then( () => {
//         console.log('hola');
//     })
//     .catch( error => console.log(error));

// https://www.freecodecamp.org/espanol/news/funciones-callback-en-javascript-que-son-los-callback-en-js-y-como-usarlos/#:~:text=Los%20callbacks%20aseguran%20que%20una,salvo%20de%20problemas%20y%20errores.

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log("Todos los productos")
        return fetchData(`${API}/products/${products[0].id}`);
    })
    .then(response => response.json())
    .then(product => {
        console.log("trae el titulo del producto")
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(error => console.log(error) )
    .finally ( () => console.log("Finally"));