import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FilldetailsService } from 'src/app/services/filldetails.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param: ActivatedRoute,private service:FilldetailsService) { }
getMenuId:any;
menuData:any;
  ngOnInit(): void {
    this.getMenuId=this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getMenu')
    if(this.getMenuId){
    this.menuData=this.service.courseDetails.filter((value)=>{
      return value.id==this.getMenuId;
    }
    )
    }
  }
  

}

