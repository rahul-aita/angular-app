import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http:HttpClient) { }

    messageAlert(){
        alert("thanks for subscribe we will touch shortly")
      }
product(): Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/users')
}
username=new Subject<any>()
}
