import { Component, OnInit } from '@angular/core';
import { FilldetailsService } from 'src/app/services/filldetails.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:FilldetailsService) { }
  courseData:any;
  ngOnInit(): void {
    this.courseData=this.service.courseDetails;
  }
  
}
