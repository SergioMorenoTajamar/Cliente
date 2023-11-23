import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Course } from "../model/course.model";
import { Model } from "../model/repository.model"
import { Message } from "../messages/message.model"
import { MessageService } from "../messages/message.service";
import { MODES, SharedState, StateUpdate } from "./sharedState.service";

@Component({
  selector: "cuForm",
  templateUrl: "form.component.html",
  styleUrls: ["form.component.css"]
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
    // Manejar cambios en el estado [CREATE,EDIT]

    this.editing = newState.mode == MODES.EDIT;

    if (this.editing && newState.id) {
      Object.assign(this.course, this.model.getCourse(newState.id)
        ?? new Course());
      this.messageService.reportMessage(
        new Message(`Editing ${this.course.title}`));
    } else {
      this.course = new Course();
      this.messageService.reportMessage(new Message("Creating New Course"));
    }
  }
  submitForm(form: NgForm) {

    if (form.valid) {
      this.model.saveCourse(this.course);
      this.course = new Course();
      form.resetForm();
    }
  }
}
