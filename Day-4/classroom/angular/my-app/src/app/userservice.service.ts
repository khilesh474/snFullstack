import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  userdata():string[] {
    return ['admin', 'manager', 'dev']
  }

  
  constructor() { }
}
