import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export default class TaskCreateComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void { }
  
  add(newTask: string) {
    if (newTask) {
      this.newItemEvent.emit(newTask);
    }
  }
}