import { Injectable } from '@angular/core';
import { ITODO } from '../data/todo';
import { ITask } from '../data/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList;
  //todoList: ITODO[] = TODOS;
  maxID = 0;
  maxTaskID = 0;

  todosURL: string  = "http://mybackend.com/api/todos";
  

  constructor(private http: HttpClient) { }

  getAllTodosHTTP(): Observable<ITODO[]>{
    return this.http
    .get<ITODO[]>(this.todosURL)
    .pipe(map(res => res));
  }

  getTodoHTTP(targetID){
    const url = `${this.todosURL}/${targetID}`;

    return this.http.get<ITODO>(url);
  }

  addTodoHTTP(todoInput){

    let newTodo = {
      title: todoInput.title,
      description: todoInput.description,
      status: todoInput.status,
      dateOfCreation: new Date(Date.now()),
      dateOfCompletion: new Date('01/01/3000'),
      dueDate: todoInput.dueDate,
      tasks: []
    };

    return this.http.post(this.todosURL, newTodo, httpOptions);
  }

  updateTodoHTTP(todoInput){

    const url = `${this.todosURL}/${todoInput.id}`;

    return this.http.put( url, todoInput, httpOptions);
  }

  getAllTodos() {
    return this.todoList;
  }

  getTodo(targetID) {
    return this.todoList.find(todo => {
      return todo.id === targetID;
    });
  }

  addTodo(todoInput){

    this.getMaxID();
    let newID = this.maxID + 1; 

    let newTodo = {
      id: newID,
      title: todoInput.title,
      description: todoInput.description,
      status: todoInput.status,
      dateOfCreation: new Date(Date.now()),
      dateOfCompletion: new Date('01/01/3000'),
      dueDate: todoInput.dueDate,
      tasks: []
    };

    this.todoList.push(newTodo);
  }

  getMaxID(){
    let todoID;

    this.todoList.forEach( todoItem => {
      todoID = todoItem.id;
      if(todoID > this.maxID){
        this.maxID = todoID;
      }
    });
  }

  addTask(taskInput : ITask){
   
    let todoID = taskInput.todoID;    
    let myTodo = this.getTodo(+todoID);
    this.getMaxTaskID(myTodo);
    this.maxTaskID++;
    taskInput.taskID = this.maxTaskID;
 
    myTodo.tasks.push(taskInput);
  }

  getMaxTaskID(myTodo: ITODO){
    let taskID;
  
    myTodo.tasks.forEach( taskItem => {
      taskID = taskItem.taskID;
      if(taskID > this.maxTaskID){
        this.maxTaskID = taskID;
      }
    });
    return this.maxTaskID;
  }

   //HTTP ERROR HANDLING
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

/*const TODOS: ITODO[] = [
  {
    id: 1,
    title: 'Todo 1',
    description: 'Todo item 1 description',
    status: 'not started',
    dateOfCreation: new Date('6/4/2019'),
    dueDate: new Date('6/20/2019'),
    tasks: [
      {
        taskID:1,
        todoID: 1,
        taskName: 'Task 1',
        taskDescription: 'Task 1 Description',
        taskCreationDate: new Date('6/4/2019'),
        taskDeadlineDate: new Date('6/20/2019'),
        status: 'not started'
      },
      {
        taskID:2,
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
    dueDate: new Date('6/20/2019'),
    tasks: [
      {
        taskID:1,
        todoID: 2,
        taskName: 'Task 1',
        taskDescription: 'Task 1 Description',
        taskCreationDate: new Date('6/4/2019'),
        taskDeadlineDate: new Date('6/20/2019'),
        status: 'not started'
      },
      {
        taskID:2,
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
    dueDate: new Date('6/20/2019'),
    tasks: [
      {
        taskID:1,
        todoID: 3,
        taskName: 'Task 1',
        taskDescription: 'Task 1 Description',
        taskCreationDate: new Date('6/4/2019'),
        taskDeadlineDate: new Date('6/20/2019'),
        status: 'not started'
      },
      {
        taskID:2,
        todoID: 3,
        taskName: 'Task 2',
        taskDescription: 'Task 2 Description',
        taskCreationDate: new Date('6/4/2019'),
        taskDeadlineDate: new Date('6/20/2019'),
        status: 'not started'
      }
    ]
  }
];*/