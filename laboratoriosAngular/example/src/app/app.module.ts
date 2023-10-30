import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './component';
import { PaAttrDirective } from './attr.directive';

@NgModule({
  declarations: [
    ProductComponent, PaAttrDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
