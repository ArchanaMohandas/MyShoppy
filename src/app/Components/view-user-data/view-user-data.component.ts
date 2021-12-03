import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-user-data',
  templateUrl: './view-user-data.component.html',
  styleUrls: ['./view-user-data.component.css'],
})

export class ViewUserDataComponent implements OnInit {
user:any;
username:any;
  constructor(private userService:UserService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
    this.username=params.get('username');

this.user=this.userService.getUserData(this.username);
console.log(this.user);

    })
  }


  //canActivate
  //canDeactivate
  //Resolve
  //canLoad
  //canActivateChild

}
