import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-maincom',
  templateUrl: './maincom.component.html',
  styleUrls: ['./maincom.component.css']
})
export class MaincomComponent implements OnInit {

  userdata

  departdata

  constructor(private us:UserserviceService, private ds:DepartmentService) { 
    this.userdata = this.us.userdata()
    this.departdata=this.ds.departdata()
  }

  ngOnInit(): void {
  }

}
