import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, RequiredValidator, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  genders=[
    {
      id:1,
      genderType:'Male'
    },
    {
      id:2,
      genderType:'Female'
    },
  ]
  myReactiveForm!: FormGroup;
title:string= "Contact"
  task: any;
  list:any[]=[] 
  item:any;
form:any
  formData: any;
  myForm: any;
  submitted:any ;
  ngForm:any
  constructor() { 
    console.log('Contact Module loaded')
  }

  ngOnInit(): void {
    this.myReactiveForm=new FormGroup({
      'fname':new FormControl(null,Validators.required),
      'lname':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'number':new FormControl(null,[Validators.required]),
      'gender':new FormControl('null')
    })
  }
// addTask(item:string){                                                   
//   this.list.push({id:this.list.length,name:item})
//   console.log(this.list)
// }
onSubmit(){
  console.log(this.myReactiveForm)
  //  this.submitted=true;
  //  this.formData.username=this.myForm.value.username;
 }
}

