import { Injectable } from '@angular/core';

import { TodoService } from './todo.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoDetailResolverService implements Resolve<any> {

  constructor(private todoService: TodoService) { }

  resolve(route: ActivatedRouteSnapshot) {

    let id = route.paramMap.get('id');

    return this.todoService.getTodoHTTP(id).pipe(take(1), mergeMap(todoItem => {
        if (todoItem)
          return of(todoItem);
        else
          return EMPTY;
      })
    );
  }
}
