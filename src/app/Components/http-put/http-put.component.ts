import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Models/User.Model';
import { ReposService } from 'src/app/Services/Repos.Service';

@Component({
  selector: 'app-http-put',
  templateUrl: './http-put.component.html',
  styleUrls: ['./http-put.component.css']
})

export class HttpPutComponent implements OnInit {
  EnableEdit=false;
  user=new user();
  constructor(private service:ReposService) { }

  ngOnInit(): void {
  }
  getUser()
  {
    this.service.getUser(this.user.id)
    .subscribe((response)=>{
      this.user=response;
      this.EnableEdit=true;
    })
  
  }
  editUser()
  {
    this.service.EditUser(this.user)
    .subscribe((response)=>{
      
    })
  }
}
