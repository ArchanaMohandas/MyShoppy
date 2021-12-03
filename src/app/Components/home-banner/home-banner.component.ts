import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {
bgcolor='gray';
 num="";
 username='';
 password='';
 firstname='';
 lastname='';
 newpassword='';
 isLoggedIn:boolean=false;
farenheit=0;
celsius=0;
 no=123123.34343;
 name='Arcsfdsfhana';

currentUser={};

today:Date=new Date();

msg:string='this is a sample for slice pipe';

  UserList=[
    {username:'Samsen',
    FirstName:'Sam',
    LastName:'Sen',
    Password:'Test1234'},

    {username:'Sidg',
      FirstName:'Sid',
      LastName:'Gupta',
      Password:'Pass1234'},

      
  ];

  constructor() { }


  
  
ngOnChanges(){

}
ngOnInit(): void {




}
ngDoCheck()
{

}

ngAfterContentInit()
{

}

ngAfterContentChecked()
{

}


ngAfterViewInit()
{

}


ngAfterViewChecked()
{

}

ngOnDestroy()
{

}
  show(no:string)
{
  this.username='';
  this.password='';
  this.num=no;
}


login()
{
  let flag=false;
  for(let u of this.UserList)
  {
    if(u.username==this.username && u.Password==this.password)
    {
      this.currentUser=u;
      flag=true;
      
    }
  }
  if(flag)
  {
    this.isLoggedIn=true;
    alert('Login Successful');
  }
  else{
    alert('Login Failed!');
  }
}


register()
{
  
  let newUser= {username:this.username,
  FirstName:this.firstname,
  LastName:this.lastname,
  Password:this.password};

  this.UserList.push(newUser);
  alert("User registered!");
}

updatePassword()
{
  let flag='';
  for(let u of this.UserList)
  {
    if(u.username==this.username)
    {
      if(u.Password==this.password)
      {
        u.Password=this.password;
        flag="true";
        return;
      }     
      else
      {
      flag="incorrect current password";
      }
    }
    else
    {
      flag="user not found";
    }
  }
  if(flag=="true")
  {
    this.password=this.newpassword;    
  }
  else{
    alert(flag);
  }
 
}


}
