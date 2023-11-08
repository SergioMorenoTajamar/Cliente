import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Course } from "./data.model";

@Component({
  selector: "app",
  templateUrl: "template.html",
})
export class CourseComponent {
  model: Model = new Model();
  newCourse: Course = new Course();

   constructor(ref: ApplicationRef) {
    this.model = new Model();
    this.newCourse = new Course();
    window.appRef = ref;
    window.model = this.model;
  }

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

  getCourseByPosition(position: number) {
  return this.model.getCourses()[position];
}

 getCourse(key: number) {
   return this.model.getCourse(key);
 }

  getCourses(): Course[] {​
    return this.model.getCourses();​
  }​​

  getCourseCount(): number {​
    return this.getCourses().length;​
  }​
  get jsonCourse() {

    return JSON.stringify(this.newCourse);

  } 

  //Ejercicio 12.3
  selectedCourse: string | undefined;


  getSelected(item: Course): boolean {
  return item != null && item.seatCapacity != null && item.title === "Angular";
}
}
