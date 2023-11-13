import { sumvalues } from "./sum";

export function asynAdd(values) {
    const promise = new Promise((resolve, reject) => {
        let suma = sumValues(values);
    
    setTimeout(
        () => suma > ? resolve(suma) : reject(new Error('se ha producido un error'));
    )
});

promise
.then(suma=>console.log(suma))
.catch(error => console.log(error));
}