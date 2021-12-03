import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {






 user:any;
  username='';
  password='';
  firstname='';
  lastname='';
  constructor(private serObj:UserService)
  {

  }
  ngOnInit(): void {
    
  }
 
  register()
  {
    console.log("Inside REgister")
 this.serObj.CreateNewUser(this.username,this.firstname,this.lastname,this.password);
}
}
