/*import sumOdd, { sumValues } from ". /sum"; I
import { multiply, substract } from "./operations";

let values = [10, 20, 30, 40, 50];
let total = sumValues(values);

let odds = sumOdd(values);

console. log(`Total: ${total}, Odd Total : ${odds}`);
console. log(`Multiply: ${multiply(values)}`);
console. log(`Substract: ${substract(1000, values)}`);  */

import { asynAdd } from ". /async";

async function asyncCall() {

let values = [10, 20, 30, 40, 50];
console. log('calling ... ');
const total = await asynAdd(values);
asyncCall();
}

