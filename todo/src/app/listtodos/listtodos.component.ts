import { Component, OnInit, OnDestroy } from '@angular/core';
import { TododataService } from '../service/data/tododata.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

export class Todo {
  constructor(
    public id: any,
    public description: string,
    public isDone: any,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  msg: string = '';
  private subscription: Subscription | undefined;

  constructor(private service: TododataService, private router: Router) {}

  ngOnInit() {
    this.refreshertodo();
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  deletetodo(id: any) {
    this.service.deletetodo('dharani', id).subscribe(
      (response) => {
        console.log(response);
        this.msg = "Successfully deleted the todo";
        this.refreshertodo();
      },
      (error) => {
        console.error('Error deleting todo:', error);
        this.msg = 'Failed to delete todo';
      }
    );
  }

  updatetodo(id: any) {
    console.log(`update${id}`);
    this.router.navigate(['todo', id]);
    this.msg = 'Update successful';
    this.refreshertodo();
  }

  createTodo() {
    this.router.navigate(['todo',-1]);
  }

  refreshertodo() {
    this.subscription = this.service.retrivealltodos('dharani').subscribe(
      (response: Todo[]) => {
        console.log(response);
        this.todos = response;
      },
      (error) => {
        console.error('Error retrieving todos:', error);
        this.msg = 'Failed to retrieve todos';
      }
    );
  }
}
