import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Models/User.Model';
import { ReposService } from 'src/app/Services/Repos.Service';

@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.css']
})
export class HttpPostComponent implements OnInit {

  user=new user();
  constructor(private service:ReposService) { }

  ngOnInit(): void {
  }

  addUser()
  {
    this.service.AddUser(this.user)
    .subscribe(data=>{
      console.log(data);
    })
  }
}
