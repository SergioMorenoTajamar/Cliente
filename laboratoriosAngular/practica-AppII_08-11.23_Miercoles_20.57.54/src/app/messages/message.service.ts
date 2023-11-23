import { Injectable } from "@angular/core";
import { Message } from "./message.model";
import { Observable, ReplaySubject, Subject } from "rxjs";

@Injectable()
export class MessageService {

  messages: Observable<Message> = new ReplaySubject<Message>(1); // Solo me interesa el último.
  reportMessage(msg: Message) {
    (this.messages as Subject<Message>).next(msg); // [msg] Mensajes que se producen

  }

} 
