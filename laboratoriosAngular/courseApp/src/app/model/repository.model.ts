import { Injectable } from "@angular/core";
import { Course } from "./course.model";
import { StaticDataSource } from "./static.datasource";


@Injectable()

export class Model {
  deleteCourse(key: number) {
      throw new Error("Method not implemented.");
  }
  getCourses(): Course[] {
      throw new Error("Method not implemented.");
  }
  getCourse(key: number): Course | undefined {
      throw new Error("Method not implemented.");
  }
  private courses: Course[];
  private locator = (p: Course, id: number) => p.id == id;


  constructor(private dataSource: StaticDataSource) {
    this.courses = new Array<Course>();
    this.dataSource.getData().forEach(p => this.courses.push(p));
  }



  getProducts(): Course[] {

    return this.courses;

  }



  getProduct(id: number): Course | undefined {

    return this.courses.find(p => this.locator(p, id));

  }
  saveProduct(product: Course | any) {

    if (product.id == 0 || product.id == null) {

      product.id = this.generateID();

      this.courses.push(product);

    } else {

      let index = this.courses

        .findIndex(p => this.locator(p, product.id));
      this.courses.splice(index, 1, product);
    }
  }

  deleteProduct(id: number) {
    let index = this.courses.findIndex(p => this.locator(p, id));
    if (index > -1) {
      this.courses.splice(index, 1);
    }
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
