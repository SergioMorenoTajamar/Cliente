import { Injectable } from "@angular/core";
import { Course } from "./course.model";

@Injectable()

export class StaticDataSource {

  private data: Course[];
  constructor() {
    this.data = new Array<Course>(
      new Course(1, "Python", 45, 44.99, "Javier Linan"),
      new Course(2, "DjMango", 13, 199.99, "Andrei Popa"),
      new Course(3, "Angular", 37, 15, "Samuel Pop"),
      new Course(4, "Java", 26, 19.99, "Sejo Toro"),
      new Course(5, "SQL", 63, 10, "Valientin Piscolabis")
    )
  }
  getData(): Course[] {
    return this.data;
  }
}
