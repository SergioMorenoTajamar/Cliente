import { createStore } from "redux";
import modelReduce from "./modelReduce";


export default createStore(modelReduce);
export { saveProduct, saveSupplier, deleteProduct, deleteSupplier } from "./modelActionCreators";