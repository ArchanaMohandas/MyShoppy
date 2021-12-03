import { Component, OnInit, ViewChild } from '@angular/core';
import { LoggerService } from 'src/app/Services/Logger.service';
import { UserService } from 'src/app/Services/user.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  
})
export class MainComponent implements OnInit {


  UserList:any;
username='';
currentUser={};
  constructor(private userObj:UserService,private custSer:LoggerService) {
   
  }

  ngOnInit(): void {
    this.UserList=UserService.UserList;
  }

ngOnChanges()
{
  console.log("inside Main _ onchanges")
  this.UserList=UserService.UserList;

}

  Search()
  {
    this.currentUser={};
    for(let u of UserService.UserList)
    {
      if(u.username==this.username)
      {
        this.currentUser=u;
      }
     
  }
}
Register()
{
  this.UserList=UserService.UserList;
}
}
