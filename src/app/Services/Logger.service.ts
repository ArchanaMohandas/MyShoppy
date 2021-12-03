import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoggerService {
constructor(private http:HttpClient)
{

}
  log(message:any){
    console.log(message);
  }
 
 
}
