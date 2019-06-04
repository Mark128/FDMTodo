import { Component, OnInit } from '@angular/core';
import { ITODO } from 'src/app/data/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoList = [];
  
  constructor(private todoService: TodoService) {   
  }

  ngOnInit() {
    this.todoList = this.todoService.getAllTodos();
  } 
}


