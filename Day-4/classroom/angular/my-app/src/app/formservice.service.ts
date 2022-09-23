import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor(private http:HttpClient) { }

  addUserToDB(user:any) {
    return this.http.post('https://angular-pro-ca8a5-default-rtdb.firebaseio.com/sn.json',user)
    .subscribe(data =>{
      console.log(data);
      
    })
  }

  loadDataFromDB() {
    return this.http.get('https://angular-pro-ca8a5-default-rtdb.firebaseio.com/sn.json')
  }
}
