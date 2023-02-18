import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import TaskListComponent from './task-list/task-list.component';
import TaskCreateComponent from './task-create/task-create.component';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskCreateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskListComponent,
    TaskCreateComponent
  ]
})
export class TaskModule { }
