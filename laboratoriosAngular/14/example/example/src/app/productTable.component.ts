import { Component, Input } from "@angular/core"
import { Product } from "./product.model";
import { Model } from "./repository.model";

@Component({
    selector: "paProductTable",
    templateUrl: "productTable.component.html"
})

export class ProductTableComponent {
    @Input("model")
    dataModel: Model | undefined;

    getProducts(): Product[] | undefined {
        return this.dataModel?.getProducts();
    }

    getProduct(key: number): Product | undefined {
        return this.dataModel?.getProduct(key);
    }
    deleteProduct(key: number) {
        this.dataModel?.deleteProduct(key);
    }

    showTable: boolean = true;
}