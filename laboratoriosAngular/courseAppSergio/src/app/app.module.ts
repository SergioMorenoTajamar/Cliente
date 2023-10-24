import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CourseComponent } from './component';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CourseComponent]
})
export class AppModule { }
