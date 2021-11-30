import { Component, EventEmitter,OnInit,Output } from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  todo:Todo;
  @Output() todoAdded:EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.todo={
      id:0,
      task:'',
      status:false
    }
   }

  ngOnInit():void {
  }
  addTodo(){
    console.log('todo added ',this.todo);
    this.todoAdded.emit(this.todo)
    this.todo={
      id:0,
      task:'',
      status:false
    }    
  }

}