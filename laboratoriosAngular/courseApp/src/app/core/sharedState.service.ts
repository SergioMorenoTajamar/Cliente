import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs" // Gesstión de procesos Asíncronos. 
export enum MODES {
  // hacer essto, es un proceso asíncrono porque hay que preparar los datos
  CREATE, EDIT 
}
export interface StateUpdate {
  mode: MODES;
  id?: number;
}
@Injectable()
export class SharedState {

  private modeValue: MODES = MODES.EDIT;
  private idValue?: number;

  constructor() {
    this.changes = new Subject<StateUpdate>();// Subject pertenece a rxjs
  }
  get id(): number | undefined { return this.idValue };

  get mode(): MODES { return this.modeValue };

  changes: Observable<StateUpdate> // Promesas 

  update(mode: MODES, id?: number) {
    this.modeValue = mode;
    this.idValue = id;
    (this.changes as Subject<StateUpdate>).next({ 
      mode: this.modeValue, id: this.idValue
    });
  }
}

