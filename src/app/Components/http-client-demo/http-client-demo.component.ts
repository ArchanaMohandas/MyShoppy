import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-client-demo',
  templateUrl: './http-client-demo.component.html',
  styleUrls: ['./http-client-demo.component.css']
})
export class HttpClientDemoComponent implements OnInit {
  num="";
  constructor() { }

  ngOnInit(): void {
  }
  show(no:string)
{
  this.num=no;
 
}

}
