import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

// import { TASKS } from '../mock-tasks';
import { Task } from '../Tasks';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';
  
  constructor(private _http : HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this._http.get<Task[]>(this.apiUrl);
  }

  createTask(task:Task ):Observable<number>{
    return this._http.post<number>(this.apiUrl, task);
  }

  updateTask(task:Task):Observable<number>{
    return this._http.put<number>(this.apiUrl+`/${task.id}`, task);
  }

  deleteTask(taskId:number):Observable<number>{
    const url = `${this.apiUrl}/${taskId}`;
    return this._http.delete<number>(url);
  }
  
  updateTaskReminder(task: Task):Observable<number>{
    const url = `${this.apiUrl}/${task.id}`;
    return this._http.put<number>(url, task);
  }

}
