import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CourseComponent } from './component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [CourseComponent]
})
export class AppModule { }

