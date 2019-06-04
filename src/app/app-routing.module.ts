import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'todolist', component: TodolistComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: "/home", pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
