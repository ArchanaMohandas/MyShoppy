import { Injectable } from '@angular/core';
import { LoggerService } from './Logger.service';

@Injectable()
export class UserService {

 static UserList=[
    {username:'Samsen',
    FirstName:'Sam',
    LastName:'Sen',
    Password:'Testtt1234'},

    {username:'Sidg',
      FirstName:'Sidg',
      LastName:'Gupta',
      Password:'Pass1234'},

      
  ];
  constructor(private loggerService:LoggerService) { }

  getUserData(username:string):any
  {
    this.loggerService.log("Inside getUserData method");
    for(let u of UserService.UserList)
    {
      if(u.username==username)
      {
        return u;
      }
      
      
    }
            return null;

  }

  CreateNewUser(userid:string,fname:string,lname:string,pass:string)
  {
    let user={username:userid,FirstName:fname,LastName:lname,Password:pass};

    UserService.UserList.push(user);

  }

  RemoveUser(username:string):void
  {
    let index=0;
    let id=0;
    for(let u of UserService.UserList)
    {
      if(u.username==username)
      {
        id=index;
      }
      
      index++;

    } 
    UserService.UserList.splice(id,1);

  }

  ResetPassword(newPass:string,username:string):boolean
  {
    for(let u of UserService.UserList)
    {
      if(u.username==username)
      {
        u.Password=newPass;
        return true;
      }
      
    }
    return false;

  }


}
