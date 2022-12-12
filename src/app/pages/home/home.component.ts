import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilldetailsService } from 'src/app/services/filldetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // username:string="Rahul"
 
  // @ViewChild('box')
  // box!: ElementRef;
  
  constructor(private service:FilldetailsService,) { }
courseData:any;


  ngOnInit(): void {
   this.courseData=this.service.courseDetails;
  }
// IsValid:boolean=true;
//   onCreateHome(){
//     this.IsValid=true;
//   }

// ngAfterViewInit(){
//   console.log(this.box);
//   this.box.nativeElement.sltyle.backgroundColor="blue"
// }
}

