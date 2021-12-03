import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import { user } from '../Models/User.Model';
@Injectable()
export class ReposService {

baseUrl:string="http://localhost:3000/";

  constructor(private http:HttpClient)
  {
    
  }
 
  public getRepos(userName:string)
  {
   return this.http.get(this.baseUrl+'users');
  }

  public getUser(id:string)
  {
   return this.http.get<user>(this.baseUrl+'users/'+id);
  }

  public AddUser(userObj:user):Observable<any>{
      const headers={'content-type':'application/json'}
      const body=JSON.stringify(userObj);
      return this.http.post(this.baseUrl+'users',body,{'headers':headers})
  }

  public EditUser(userObj:user):Observable<user>{
    const headers={'content-type':'application/json',Authorization:'my-auth-token'}
    const body=JSON.stringify(userObj);
    return this.http.put<user>(this.baseUrl+'users/'+userObj.id,userObj,{'headers':headers})
}
public DeleteUser(userid:string):Observable<any>{
    
    return this.http.delete(this.baseUrl+'users/'+userid);
}
}
