import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Course } from "./data.model";


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

  //Ejercicio 10.3
  getStylesEj3(key: number) {
    let course = this.model.getCourse(key);
    return {
      "margin.px": 100,
      color: course.seatCapacity >= 17 ? "green" : "red",
      fontSize: course.title == "Angular"? "30px" : "20px"
    }
  }

 //Ejercicio 11.1
 constructor(ref: ApplicationRef) {​
    (<any>window).appRef = ref;​
    (<any>window).model = this.model;​
  }​

  getCourseByPosition(position: number): Course {​
    return this.model.getCourses()[position];​
  }

  getCourse(key: number): Course |undefined {​
    return this.model.getCourse(key);​
  }​

  getCourses(): Course[] {​
    return this.model.getCourses();​
  }​​

  getCourseCount(): number {​
    return this.getCourses().length;​
  }​

  //Ejercicio 12.3
  selectedCourse: string | undefined;
}
