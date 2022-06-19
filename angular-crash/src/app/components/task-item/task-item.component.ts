import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TaskService } from '../../services/task.service';
import {  Task } from '../../Tasks';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onupdateTaskReminder:EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;


  @Output() btnClick = new EventEmitter();
  
  constructor(_taskService:TaskService) { }

  ngOnInit(): void {
  }

  onDelete(task:Task):void{
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task):void{
    this.onupdateTaskReminder.emit(task);
  }

}
