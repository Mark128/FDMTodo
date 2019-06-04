import { Component, OnInit, Input } from '@angular/core';
import { ITODO } from 'src/app/data/todo';

@Component({
  selector: 'todo-thumbnail',
  templateUrl: './todo-thumbnail.component.html',
  styleUrls: ['./todo-thumbnail.component.css']
})
export class TodoThumbnailComponent implements OnInit {

  @Input() todo: ITODO;
  

  constructor() { }

  ngOnInit() {
  }
}
