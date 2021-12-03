import { Component, OnInit } from '@angular/core';
import { repos } from 'src/app/Models/User.Model';
import { ReposService } from 'src/app/Services/Repos.Service';

@Component({
  selector: 'app-http-delete',
  templateUrl: './http-delete.component.html',
  styleUrls: ['./http-delete.component.css']
})
export class HttpDeleteComponent implements OnInit {

  constructor(private ser:ReposService) { }
 userid:any;
  ngOnInit(): void {
  }

  DeleteUser()
  {
    this.ser.DeleteUser(this.userid)
    .subscribe((res)=>{
      
    })
  }
}
