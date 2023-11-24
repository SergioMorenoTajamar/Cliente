import { Injectable } from "@angular/core";
import { Course } from "./course.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()

export class Model {

  private courses: Course[];
  private locator = (c: Course, id: number) => c.id == id;

  constructor(private dataSource: StaticDataSource) {
    this.courses = new Array<Course>();
    this.dataSource.getData().forEach(c => this.courses.push(c));
  }
  getCourses(): Course[] {
    return this.courses;
  }
  getCourse(id: number): Course | undefined {
    return this.courses.find(c => this.locator(c, id));
  }
  saveCourse(course: Course | any) {
    if (course.id == 0 || course.id == null) {
      course.id = this.generateID();
      this.courses.push(course);
    } else {
      let index = this.courses
        .findIndex(c => this.locator(c, course.id));
      this.courses.splice(index, 1, course);
    }
  }

  deleteCourse(id: number) {
    let index = this.courses.findIndex(c => this.locator(c, id));
    if (index > -1) {
      this.courses.splice(index, 1);
    }
  }
  private generateID(): number {
    let newId = 100;
    while (this.getCourse(newId) != null) {
      newId++;
    }
    return newId;
  }
} 
