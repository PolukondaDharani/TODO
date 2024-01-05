import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../listtodos/listtodos.component';

@Injectable({
  providedIn: 'root'
})
export class TododataService {

  constructor(
    private http:HttpClient
  ) { 
   
  }

  retrivealltodos(username:String){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    // console.log("this is controller");
  }
  deletetodo(username:String,id:any){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
    // console.log("this is controller");
  }
  retrivetodo(username:String,id:any){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
    // console.log("this is controller");
  }
  updatetodo(username:String,id:any,todo:Todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo);
    // console.log("this is controller");
  }

  addtodo(username:String,todo:Todo){
    return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos`,todo);
    // console.log("this is controller");
  }
}
