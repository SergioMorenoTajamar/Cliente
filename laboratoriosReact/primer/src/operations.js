export function multiply(values){
    return values.reduce((total, val) => total * val, 1);
}

export function substract(amount, values){
    return values.reduce((total, val) => total - val, amount);
}
export function divide(first, second) {
    return first / second
}