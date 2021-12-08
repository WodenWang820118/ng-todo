import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from '../Tasks'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  // binding the `http` to the HttpClient module
  // to use the module, need to pass the module to the constructor with private keyword
  // the private keyword means the HttpClien could only be used in the this class
  constructor(private http:HttpClient) { }

  // the observable is the data that is returned from the server
  // the <> is the type of data that is returned; here it is an array of Task type objects
  // the HttpClien's get, delete, put methods return an Observable, and can be subscribed by the component

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`)
  }

  udpateTaskReminder(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task, httpOptions)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }
}
