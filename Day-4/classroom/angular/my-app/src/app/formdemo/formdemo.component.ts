import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.css']
})
export class FormdemoComponent implements OnInit {

  users:any=[]
  constructor(private fs:FormserviceService) { 

  }

  ngOnInit(): void {
    // this.loadData()
  }

  adduser(nf:NgForm) {
    // console.log(nf.value);
    this.fs.addUserToDB(nf.value)
    
  }

  loadData() {
    this.fs.loadDataFromDB().subscribe(data => {
     const mydata =[]
     for(let key in data){
      mydata.push(data[key])
     }
     this.users=mydata
      
    })
  }

}
