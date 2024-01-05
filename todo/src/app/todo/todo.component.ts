import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../listtodos/listtodos.component';
import { TododataService } from '../service/data/tododata.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  newtodo: Todo = new Todo(null, "", false, new Date());
  todo: any;
  msg: string = '';

  constructor(private route: ActivatedRoute, private todoservice: TododataService, private router: Router) {
    // Initialize the id to -1 initially
    this.id = -1;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id !== -1) {
      this.todoservice.retrivetodo('dharani', this.id).subscribe(
        (data) => this.todo = data,
      );
    }
  }

  saveTodo() {
    if (this.id == -1) {
      // Create a new Todo object with the values from newtodo
      const newTodo = new Todo(null, this.newtodo.description, false, this.newtodo.targetDate);
      this.todoservice.addtodo('dharani', newTodo).subscribe(
        (data) => {
          this.newtodo = data;
          this.router.navigate(['todos']);
        }
      );
    } else {
      this.todoservice.updatetodo('dharani', this.id, this.todo).subscribe(
        (data) => {
          this.todo = data;
          this.router.navigate(['todos']);
        }
      );
    }
  }

  istrue(): boolean {
    return this.id == -1;
  }
}
