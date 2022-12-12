import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  users: Array<{ name: string }> = [];
  constructor() {}
  username = '';
  ngOnInit(): void {}
  // //   https://media.istockphoto.com/photos/laptop-with-blank-screen-isolated-on-white-background-picture-id1128662796
  // //   https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
  // //   https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
  // //  https://media.istockphoto.com/photos/laundry-room-with-a-washing-machine-picture-id1134696908?s=612x612 \
  // products = [
  //   {
  //     proimg: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  //     name: 'Laptop',
  //     id: 'pro01',
  //     price: '25000/-',
  //   },
  //   {
  //     proimg: 'https://images.unsplash.com/photo-1597575732103-9f6d068cfa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //     name: 'Tv',
  //     id: 'pro02',
  //     price: '20000/-',
  //   },
  //   {
  //     proimg: 'https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //     name: 'Mobile',
  //     id: 'pro03',
  //     price: '25000/-',
  //   },
  //   { proimg: 'https://media.istockphoto.com/photos/laundry-room-with-a-washing-machine-picture-id1134696908?s=612x612 ', name: 'Washing Machine', id: 'pro04', price: '15000/-' },
  // ];
  onCreateUser(usrName: any) {
    this.users.push({
      name: usrName.value,
    });
    console.log(this.users);
  }
  onRemoveUser(UsrName: any){
    this.users.splice(this.users.length -1)
   
  }
  onRemoveItem(i: number){
    this.users.splice(this.users.length -i)
   
  }
}
