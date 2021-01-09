import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') assignmentForm: NgForm
  subscriptions: string[] = ['basic', 'advanced', 'pro'];
  defaultSubscription: string = 'advanced';
  
  user = {
    email: 'test',
    subscription: '',
    password: ''
  }
  submitted: boolean=false

  onSubmit() {
    this.submitted = true;
    this.user.email = this.assignmentForm.value.email;
    this.user.subscription = this.assignmentForm.value.subscription;
    this.user.password = this.assignmentForm.value.password;
    console.log(this.assignmentForm);
    console.log(this.submitted,  this.user.password, this.assignmentForm.value.password)
  }

}
