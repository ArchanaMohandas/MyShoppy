import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {observable} from 'rxjs';
@Injectable()
export class ProductService {

  constructor(private http:HttpClient)
  {
    
  }
 data:any;
  public getData()
  {
    this.http.get<any[]>("https://api.publicapis.org/entries")
    .subscribe(data=>{
     this.data=data.entries;
    })

    return this.data;
  }
}
