import { Component } from "@angular/core";
import { Model } from "./repository.model"; 


@Component({
  selector: "app",
  templateUrl: "template.html",

})
export class ProductComponent {
  model: Model = new Model();


  getClasses(key: number):string{
  let product = this.model.getProduct(key);
  return "p-2 "+ (product.price < 50 ? "bg-info":"bg-warning")

  }

  getClassMap(key:number): Object {
    let product = this.model.getProduct(key);
    return {
      "text-center bg-danger": product.name == "Kayak",
      "bg-info": product.price < 50
    };
  }
  public fontSizeWithUnits: string = "30px";
  public fontSizeWithOutUnits: number = 30;


  getStyles(key:number){
    let product = this.model.getProduct(key);
    return{
      fontSize:"25px",
      "margin.px":100,
      color: product.price >50? "red":"green"
    }
  }
}
