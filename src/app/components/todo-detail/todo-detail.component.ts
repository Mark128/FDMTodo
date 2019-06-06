import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { ITODO } from 'src/app/data/todo';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todoItem;
  showTasks:boolean = false;
  id;

  constructor(
    private route: ActivatedRoute, 
    private todoService: TodoService, 
    private router: Router) { }

  ngOnInit() {
    //grabbing the ID that was passed in from the thumbnail from the URL
    this.id = this.route.snapshot.paramMap.get('id');

    //Go to the todoService and use the getTodo(id) function 
   // this.todoItem = this.todoService.getTodo(+this.id);

    /*this.todoService.getTodoHTTP(this.id).subscribe( data => {
      this.todoItem = data;
    });*/

    this.route.data.subscribe(data => {
      this.todoItem = data.todoItem;
    });
  }

  toggleTaskView(){
    this.showTasks = !this.showTasks;
  }

  addTask(){
    this.router.navigate(['/addTask', {id: this.id}]);
  }
}

