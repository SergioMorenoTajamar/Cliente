import { Component } from "@angular/core";
import { Course } from "../model/course.model";
import { Model } from "../model/repository.model";
import { MODES, SharedState } from "./sharedState.service";

@Component({
  selector: "paTable",
  templateUrl: "table.component.html"
})
export class TableComponent {
  constructor(private model: Model, private state: SharedState) { }

  getCourse(key: number): Course | undefined {
    return this.model.getCourse(key);
  }

  getCourses(): Course[] {
    return this.model.getCourses();
  }

  deleteCourse(key?: number) {
    if (key !== undefined) {
      this.model.deleteCourse(key);
    }
  }

  editCourse(key?: number) {
    this.state.update(MODES.EDIT, key);
  }

  createCourse() {
    this.state.update(MODES.CREATE);
  }
}
