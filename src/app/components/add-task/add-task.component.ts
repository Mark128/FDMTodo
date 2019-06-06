import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ITODO } from 'src/app/data/todo';
import { ITask } from 'src/app/data/task';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  todoID;
  taskForm;
  todoItem;

  statusOptions =[
    'Not Started',
    'On Going',
    'Complete'
  ];
  
  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private todoService: TodoService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
      //grabbing the ID that was passed in from the todo detail page by the URL
      this.todoID = this.route.snapshot.paramMap.get('id');
      this.todoService.getTodoHTTP(this.todoID).subscribe( t => {
        this.todoItem = t;
      })

      this.createForm();
  }

  createForm(){    
    this.taskForm = this.fb.group({
      taskID: [1],
      todoID: new FormControl({value: this.todoID, disabled: true}),
      taskName: ['', [this.restrictedWords, Validators.required]],
      taskDescription: ['', [Validators.required, this.restrictedWords]],
      taskCreationDate: [Date.now()],
      taskDeadlineDate: [''],
      status: ['']
    });
  }

  private restrictedWords(formControl: FormControl): {[key:string]: any}{
    return formControl.value.includes('shoot') ? {'restrictedWords' : 'shoot'} : null;

  }

  submitTask(){
    //this.todoService.addTask(this.taskForm.value);
    let maxTaskID = this.todoService.getMaxTaskID(this.todoItem)
    maxTaskID++;
    
    let newTask: ITask = {
      taskID: maxTaskID,
      todoID: this.todoID,
      taskName: this.taskForm.value.taskName,
      taskDescription: this.taskForm.value.taskDescription,
      taskCreationDate: new Date(Date.now()),
      taskDeadlineDate: this.taskForm.value.taskDeadlineDate,
      status: this.taskForm.value.status
    }

    this.todoItem.tasks.push(newTask);
    this.todoService.updateTodoHTTP(this.todoItem).subscribe();
    
    this.toastr.success('Added Task!');
    this.router.navigate(['/tododetail/:id', {id: this.todoID}])
  }

  cancel(){
    this.router.navigate(['/tododetail/:id', {id: this.todoID}]);
  }

  canDeactivate(): Observable<boolean> | boolean {
 
    if (!this.taskForm.dirty) {
      return true;
    }

    const confirm = window.confirm('Are you sure you want to leave?');

    return confirm;
  }
}
