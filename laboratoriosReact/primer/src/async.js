import { sumValues } from "./sum";

export function asynAdd(values) {
    const promise = new Promise((resolve, reject) => {
        let suma = sumValues(values);
        setTimeout(
            () => suma > 0 ? resolve(suma) : reject(new Error('Se ha producido un error')), 1000
        )
    });
    promise
        .then(suma => console.log(suma))
        .catch(error => console.log(error));
}