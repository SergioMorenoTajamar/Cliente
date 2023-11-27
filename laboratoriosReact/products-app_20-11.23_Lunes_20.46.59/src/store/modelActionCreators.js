import { PRODUCTS, SUPPLIERS } from "./dataTypes"
import { STORE, UPDATE, DELETE } from "./modelActionTypes";

let idCounter = 100;
// Función utilizada para guardar un producto
export const saveProduct = (product) => {
    return createSaveEvent(PRODUCTS, product);
}

// Función utilizada para guardar un proveedor
export const saveSupplier = (supplier) => {
    return createSaveEvent(SUPPLIERS, supplier);
}

// Función utilizada para eliminar un producto
export const deleteProduct = (product) => (
    {
        type: DELETE,
        dataType: PRODUCTS,
        payload: product.id

    }
)
// Función utilizada para eliminar un proveedor
export const deleteSupplier = (supplier) => (
    {
        type: DELETE,
        dataType: SUPPLIERS,
        payload: supplier.id
    }
)
// funcion utilizada para crear un evento de guardado
const createSaveEvent = (dataType, payload) => {

    if (!payload.id) {
        return {
            type: STORE,
            dataType: dataType,
            payload: { ...payload, id: idCounter++ }
        }

    } else {
        return {
            type: UPDATE,
            dataType: dataType,
            payload: payload
        }
    }




}