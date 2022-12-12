import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../service/designutility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  uname:any
  constructor(private  _designService:DesignutilityService) { 
    this._designService.username.subscribe(uname=>{
      this.username=uname
    })
  }

  ngOnInit(): void {
  }
  username:string="Rahul"

UpdateUserName(uname: { value: string; }){
  // this.username=uname.value;
  this._designService.username.next(uname.value)
}
}
