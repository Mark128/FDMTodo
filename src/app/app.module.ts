import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoThumbnailComponent } from './components/todo-thumbnail/todo-thumbnail.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TaskThumbnailComponent } from './components/task-thumbnail/task-thumbnail.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TodoThumbnailComponent,
    TodoDetailComponent,
    TaskThumbnailComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
