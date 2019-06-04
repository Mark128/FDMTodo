import { Injectable } from '@angular/core';
import { ITODO } from '../data/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: ITODO[] = TODOS;

  constructor() { }

  getAllTodos() {
    return this.todoList;
  }

  getTodo(targetID) {
    return this.todoList.find(todo => {
      return todo.id === targetID;
    });
  }
}

const TODOS: ITODO[] = [
  {
    id: 1,
    title: 'Todo 1',
    description: 'Todo item 1 description',
    status: 'not started',
    dateOfCreation: new Date('6/4/2019'),
    tasks: [
      {
        todoID: 1,
        taskName: 'Task 1',
        taskDescription: 'Task 1 Description',
        taskCreationDate: new Date('6/4/2019'),
        taskDeadlineDate: new Date('6/20/2019'),
        status: 'not started'
      },
      {
        todoID: 1,
        taskName: 'Task 2',
        taskDescription: 'Task 2 Description',
        taskCreationDate: new Date('6/4/2019'),
        taskDeadlineDate: new Date('6/20/2019'),
        status: 'not started'
      }
    ]
  },
  {
    id: 2,
    title: 'Todo 2',
    description: 'Todo item 2 description',
    status: 'not started',
    dateOfCreation: new Date('6/1/2019'),
    tasks: [
      {
        todoID: 2,
        taskName: 'Task 1',
        taskDescription: 'Task 1 Description',
        taskCreationDate: new Date('6/4/2019'),
        taskDeadlineDate: new Date('6/20/2019'),
        status: 'not started'
      },
      {
        todoID: 2,
        taskName: 'Task 2',
        taskDescription: 'Task 2 Description',
        taskCreationDate: new Date('6/4/2019'),
        taskDeadlineDate: new Date('6/20/2019'),
        status: 'not started'
      }
    ]
  },
  {
    id: 3,
    title: 'Todo 3',
    description: 'Todo item 3 description',
    status: 'not started',
    dateOfCreation: new Date('6/2/2019'),
    tasks: [
      {
        todoID: 3,
        taskName: 'Task 1',
        taskDescription: 'Task 1 Description',
        taskCreationDate: new Date('6/4/2019'),
        taskDeadlineDate: new Date('6/20/2019'),
        status: 'not started'
      },
      {
        todoID: 3,
        taskName: 'Task 2',
        taskDescription: 'Task 2 Description',
        taskCreationDate: new Date('6/4/2019'),
        taskDeadlineDate: new Date('6/20/2019'),
        status: 'not started'
      }
    ]
  }
];