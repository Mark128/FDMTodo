import { Injectable } from '@angular/core';
import { TodoService } from './todo.service';
import { Resolve } from '@angular/router';
import { of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoListResolverService implements Resolve<any> {

  constructor(private todoService: TodoService) { }

  resolve() {

    return this.todoService.getAllTodosHTTP().pipe(mergeMap(todos => {
        if (todos)
          return of(todos);
        else
          return EMPTY;
      })
    );
  }
}
