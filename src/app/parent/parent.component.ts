import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  todoList:Todo[];
  constructor() {
    this.todoList=[]
   }

  ngOnInit():void {
  }
  todoAdded(todo:Todo){
    console.log("Parent : ",todo);
    this.todoList.push(todo);    
  }

}
