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


}
