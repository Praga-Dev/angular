import { Component, OnInit } from '@angular/core';
import { Task } from '../../Tasks'

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  showAddTask = false;

  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this._taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    // this._taskService.deleteTask(task.id).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
    if (task && task.id) {
      this._taskService.deleteTask(task.id ?? 0).subscribe(() => this.getTasks());
    }
  }

  updateTaskReminder(task: Task): void {
    task.reminder = !task.reminder;
    this._taskService.updateTaskReminder(task).subscribe(() => this.getTasks());
  }

  addTask(task: Task): void {
    this._taskService.createTask(task).subscribe(() => this.getTasks());
  }

  updateTask(task: Task): void {
    this._taskService.updateTask(task).subscribe(() => this.getTasks());
  }

}
