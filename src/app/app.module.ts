import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {CourseComponent} from './course/course.component';
import {StylenclassComponent} from './stylenclass/stylenclass.component';
import { CoronaComponent } from './corona/corona.component';
import { BookComponent } from './book/book.component';
import {ChildComponent} from './child/child.component';
import {ParentComponent} from './parent/parent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CourseComponent,StylenclassComponent,CoronaComponent,BookComponent,ChildComponent,ParentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
