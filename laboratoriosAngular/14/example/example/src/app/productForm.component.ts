import { Component, Output, EventEmitter } from "@angular/core";
import { Product } from "./product.model";



@Component({
    selector: "paProductForm",
    templateUrl: "productForm.component.html",
    styleUrls: ["productForm.component.css"]
})

export class ProductFormComponent {
    newProduct: Product = new Product();

    @Output("paNewProduct")
    newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.newProductEvent.emit(this.newProduct);
        this.newProduct = new Product();
        form.resetForm();
    }

    //CSS: --> View Encapsulation: encapsular en cada uno de los
    //Componentes la funcinalidad propia para que no interfiera
    //en la funcionalidad de los otros componentes
    //Modos: 1. ShadowDom, Emulated, None
}