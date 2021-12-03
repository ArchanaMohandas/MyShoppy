import { style } from "@angular/animations";
import { Component } from "@angular/core";
import {Router} from '@angular/router'
@Component({
    selector:'login',
    templateUrl:'./login.component.html'
    
})
export class LoginComponent{

constructor(private router:Router)
{

}
    loginSuccess:boolean=false;
    loginFailure:boolean=true;
    userlist=[
        {
            username:"admin",
            password:"admin"
        },
        {
            username:"archana",
            password:"test1234"
        },
        {
            username:"sid",
            password:"sid23"
        }
    ]

username:string='';
password:string='';

Login()
{
    console.log(this.username+this.password);
  for(let u of this.userlist)
  {
      if(u.username==this.username && u.password==this.password)
      {
 this.loginSuccess=true;

          //alert("Login successful");
      }
     
  }
  console.log(this.loginSuccess);

localStorage.setItem('isUserLoggedIn',"true");


      if(this.loginSuccess)
      {
          console.log('inside navigate')
  this.router.navigateByUrl('/products');      }
  }

}

