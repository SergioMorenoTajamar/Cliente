import { Component } from "@angular/core";
import { Model } from "./repository.model";


@Component({
  selector: "app",
  templateUrl: "template.html",

})
export class CourseComponent {
  model: Model = new Model();

//Ejercicio 10.2
  getClassEj2(key: number): Object {
    let course = this.model.getCourse(key);
    return {
      "text-center bg-warning": course.title == "Angular",
      "bg-info": course.seatCapacity < 17
    };
  }
  getStylesEj3(key: number) {
    let course = this.model.getCourse(key);
    return {
      "margin.px": 100,
      color: course.seatCapacity >= 17 ? "green" : "red",
      fontSize: course.title == "Angular"? "30px" : "20px"
    }
  }

}
