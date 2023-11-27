import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Course } from "../model/course.model";
import { Model } from "../model/repository.model"
import { Message } from "../messages/message.model"
import { MessageService } from "../messages/message.service";
import { MODES, SharedState, StateUpdate } from "./sharedState.service";

@Component({
  selector: "pForm",
  templateUrl: "form.component.html"
})

export class FormComponent {

  course: Course = new Course();
  editing: boolean = false;

  constructor(private model: Model, private state: SharedState,
    private messageService: MessageService) {

    this.state.changes.subscribe((upd) => this.handleStateChange(upd))
    this.messageService.reportMessage(new Message("Creating New Course"));
  }

  handleStateChange(newState: StateUpdate) { 

    this.editing = newState.mode == MODES.EDIT;

    if (this.editing && newState.id) {
      Object.assign(this.course, this.model.getCourse(newState.id)
        ?? new Course());
      console.log("1");
      this.messageService.reportMessage(
        new Message(`Editing ${this.course.title}`));
    } else {
      console.log("2");
      this.course = new Course();
      this.messageService.reportMessage(new Message("Creating New Course"));
    }
  }
  cancelEdit() {
    this.state.update(MODES.CREATE);
  }
  submitForm(form: NgForm) {

    if (form.valid) {
      this.model.saveCourse(this.course);
      this.course = new Course();
      form.resetForm();
      this.state.update(MODES.CREATE);
    }
  }
}
