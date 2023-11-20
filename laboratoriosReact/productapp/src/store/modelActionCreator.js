import { PRODUCTS, SUPPLIERS } from "./dataTypes";
import { STORE, UPDATE, DELETE } from "./modelActiomTypes";

let idCounter= 100;

export const saveProduct = (product) => {
    return createSaveEvent(PRODUCTS,product);
}

export const saveSupplier = (suplier) => {
    return createSaveEvent(SUPPPLIERS,supplier);
}

export const deleteProduct = (product) => {
   type: DELETE,
    dataType: PRODUCT,
    payload: product.id
}
export const deleteSupplier = (supplier) => ({
    type: DELETE,
    dataType: SUPPLIER,
    payload: supplier.id
)}


const createSaveEvent = (dataType, payload) => {
    if(!payload.id) {
        return {
            type: STORE,
            dataTupe: dataType,
            payload{}...  payload id, idCounter++}
        }else
    }
        return {
            type:STORE,
            dataType : dataType,
            payload{}...  payload id, idCounter++}
        }
    }
}