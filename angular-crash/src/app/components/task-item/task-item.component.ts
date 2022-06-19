import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Task } from '../../Tasks';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;

  faTimes = faTimes;


  @Output() btnClick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
