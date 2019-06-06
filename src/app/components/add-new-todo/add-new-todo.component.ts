import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ITODO } from 'src/app/data/todo';

@Component({
  selector: 'add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.css']
})
export class AddNewTodoComponent implements OnInit {

  title: string;
  description: string;
  dateOfCreation;
  dueDate;
  dateOfCompletion;
  status;

  statusOptions =[
    'Not Started',
    'On Going',
    'Complete'
  ];

  todoList;

  constructor(
    private todoService: TodoService, 
    private toastr: ToastrService, 
    private router: Router) { }

  ngOnInit() {
    this.todoService.getAllTodosHTTP().subscribe(todos => this.todoList = todos);
  }

  onSubmit(formValues){
    //this.todoService.addTodo(formValues);
    this.todoService.addTodoHTTP(formValues).subscribe();
    this.toastr.success('Added new todo!');
    this.router.navigate(['/todolist']);
  }

}
