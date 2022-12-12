import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../service/designutility.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 

  constructor(private _msgService:DesignutilityService) { }
products={};
  ngOnInit(): void {
    this._msgService.product()
    .subscribe((productData: {}) => this.products=productData)
  }
  
  btnClick(){
  //   const msgService=new MessageService();
  //   msgService.messageAlert()
  this._msgService.messageAlert();
   }
}
