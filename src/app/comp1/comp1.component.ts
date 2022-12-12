import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../service/designutility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
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
