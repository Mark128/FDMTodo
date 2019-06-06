import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { AddNewTodoComponent } from './components/add-new-todo/add-new-todo.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { TodoDetailResolverService } from './services/todo-detail-resolver.service';
import { TodoListResolverService } from './services/todo-list-resolver.service';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'todolist', component: TodolistComponent, resolve: {todoList: TodoListResolverService}},
  {path: 'profile', component: ProfileComponent},
  {path: 'tododetail/:id', component: TodoDetailComponent, resolve: {todoItem: TodoDetailResolverService}},
  {path: 'createTodo', component: AddNewTodoComponent},
  {path: 'addTask', component: AddTaskComponent, canDeactivate: [CanDeactivateGuard]},
  {path: '', redirectTo: "/home", pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
