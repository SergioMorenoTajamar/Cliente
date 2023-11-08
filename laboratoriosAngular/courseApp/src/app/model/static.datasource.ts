import { Injectable } from "@angular/core";
import { Course } from "./course.model";

@Injectable()
export class StaticDataSource {
  private data: Course[];

  constructor() {
    this.data = new Array<Course>(
      new Course(1, "Angular", 100, "Pepe Garcia"),
      new Course(2, "JavaScript", 11, "Juan Moreno"),
      new Course(3, "Python", 42, "John Gomez"),
      new Course(4, "Java", 6, "Ivan Montes"),
      new Course(5, "HTML", 34, "Fernando Alonso")
    )
  }
  getData(): Course[] {
    return this.data;
  }
}
