import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { ITODO } from 'src/app/data/todo';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todoItem;

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    //grabbing the ID that was passed in from the thumbnail from the URL
    let id = this.route.snapshot.paramMap.get('id');

    //Go to the todoService and use the getTodo(id) function 
    this.todoItem = this.todoService.getTodo(+id);
    
    console.log(this.todoItem);
  }
}

