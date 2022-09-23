import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {


  departdata():string[] {
    return ['HR', 'ADMIN', 'FINANCE']
  }

  constructor() { }
}
