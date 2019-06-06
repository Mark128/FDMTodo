import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoThumbnailComponent } from './components/todo-thumbnail/todo-thumbnail.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TaskThumbnailComponent } from './components/task-thumbnail/task-thumbnail.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoService } from './services/todo.service';
import { AddNewTodoComponent } from './components/add-new-todo/add-new-todo.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { todoListBackendService } from './todoList.backend.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TodoThumbnailComponent,
    TodoDetailComponent,
    TaskThumbnailComponent,
    TaskDetailComponent,
    HomeComponent,
    TodolistComponent,
    AddNewTodoComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    InMemoryWebApiModule.forRoot(todoListBackendService),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true}) 
  ],
  providers: [
    TodoService,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
