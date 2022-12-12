import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../service/designutility.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor(private _msgService:DesignutilityService) { }

  ngOnInit(): void {
  }
  btnClick(){
   this._msgService.messageAlert();
  }
}
