import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    FormsModule, // Agrega FormsModule a la lista de imports
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


@Component({
  selector: "app",
  templateUrl: "template.html",

})
export class ProductComponent {
  model: Model = new Model();


  getClasses(key: number): string {
    let product = this.model.getProduct(key);
    return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning")

  }

  getClassMap(key: number): Object {
    let product = this.model.getProduct(key);
    return {
      "text-center bg-danger": product.name == "Kayak",
      "bg-info": product.price < 50
    };
  }
  public fontSizeWithUnits: string = "30px";
  public fontSizeWithOutUnits: number = 30;


  getStyles(key: number) {
    let product = this.model.getProduct(key);
    return {
      fontSize: "25px",
      "margin.px": 100,
      color: product.price > 50 ? "red" : "green"
    }
  }

  constructor(ref: ApplicationRef) {​
    (<any>window).appRef = ref;​
    (<any>window).model = this.model;​
  }​

  getProducteByPosition(position: number): Product {​
    return this.model.getProducts()[position];​
  }

  getProducte(key: number): Product {​
    return this.model.getProduct(key);​
  }​

  getProducts(): Product[] {​
    return this.model.getProducts();​
  }​​

  getProductCount(): number {​
    return this.getProducts().length;​
  }​

  newProduct:Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p:Product) {
    console.log("New product: "+ this.jsonProduct)
  }
}
