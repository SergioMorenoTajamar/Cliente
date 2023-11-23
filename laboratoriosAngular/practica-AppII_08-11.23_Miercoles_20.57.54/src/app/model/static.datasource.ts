import { Injectable } from "@angular/core";
import { Course } from "./course.model";

@Injectable()

export class StaticDataSource {

  private data: Course[];
  constructor() {
    this.data = new Array<Course>(
      new Course(1, "Agile", 20, 274, "John Jones"),
      new Course(2, "C#", 15, 345.23, "John Jones"),
      new Course(3, "Angular", 452, 13, "Ross Miller"),
      new Course(4, "Java", 10, 232.20, "Alex Walker"),
      new Course(5, "SQL", 10, 157, "Ross Miller")
    )
  }
  getData(): Course[] {
    return this.data;
  }
}
