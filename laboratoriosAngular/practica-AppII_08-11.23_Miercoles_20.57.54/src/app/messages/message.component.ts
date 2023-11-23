import { Component } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { MODES, SharedState, StateUpdate } from "../core/sharedState.service";
@Component({
  selector: "cuMessages",
  templateUrl: "message.component.html",
})
export class MessageComponent {
  lastMessage?: Message;
  editing?: boolean = false;
  constructor(messageService: MessageService, sharedState: SharedState) {
    messageService.messages.subscribe(msg => this.lastMessage = msg);
    sharedState.changes.subscribe(upd => this.handleStateChange(upd));

  }
  handleStateChange(newState: StateUpdate) {
    this.editing = newState.mode == MODES.EDIT;
  }
}
