import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModelModule } from "./model/model.module";
import { CoreModule } from "./core/core.module";
import { MessageModule } from "./messages/message.module";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { MessageComponent } from "./messages/message.component";

@NgModule({
  declarations: [TableComponent, FormComponent, MessageComponent], // Declarar tus componentes aquí
  imports: [BrowserModule, ModelModule, CoreModule, MessageModule],
  providers: [],
  bootstrap: [TableComponent] // Solo se debe especificar un componente para el arranque
})
export class AppModule { }
