/* eslint-disable import/no-anonymous-default-export */

// Exportaci�n an�nima que la puedo llamar como quiera en example.js
// Las tengo que importar sin llaves


//export default function (values) {

//    return values.reduce((total, val) => total + val, 0);
//}


// Exportaci�n con nombre que la puedo llamar como quiera en example.js
export function sumValues(values) {

    return values.reduce((total, val) => total + val, 0);
}

export default function sumOdd(values) {

    return sumValues(values.filter((item, index) => index % 2 === 0))
}