import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  formData: any;
  submitted!: false;
  myForm: any;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form);
    this.submitted=false;
    this.formData.username=this.myForm.value.username;
  }
}
