import { Component, OnInit } from '@angular/core';
import { repos } from 'src/app/Models/User.Model';
import { ReposService } from 'src/app/Services/Repos.Service';

@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css']
})
export class HttpGetComponent implements OnInit {

userName:string='mojombo';
repos:any;

  constructor(private ser:ReposService) { }

  ngOnInit(): void {
   this.getRepos();
  }


public getRepos()
{
  this.ser.getRepos(this.userName)
  .subscribe((response)=>{
     this.repos=response;
     console.log(this.repos);
  })
}

}
