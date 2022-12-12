import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component implements OnInit {
  submitted =false;
  formData={
    username:'',
    email:'',
    course:''
  }
    myForm: any;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form);
    this.submitted=true;
    this.formData.username=this.myForm.value.username;
  }
}
