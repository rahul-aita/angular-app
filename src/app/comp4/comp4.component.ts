import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../service/designutility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

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
