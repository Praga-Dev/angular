import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export default class TaskListComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }
  ngOnInit(): void {
    let selectedDate:Date = new Date(this._route.snapshot.params['date']);
    console.log(selectedDate)
  }

  tasks: Task[] = [
    new Task('Visit Ann'),
    new Task('Call Dad'),
    new Task('Go to Gym'),
    new Task('Wash the dishes'),
    new Task('Party Hard!')
  ]

  add(newTask: string) {
    if (newTask) {
      this.tasks.push(new Task(newTask));
    }
  }

  remove(task: string) {
    if (task) {
      let isConfirm = confirm(`Are you sure that you want to remove the task - ${task} ?`);
      if (isConfirm) {
        this.tasks = this.tasks.filter(t => t.title != task);
      }
    }
  }
}
