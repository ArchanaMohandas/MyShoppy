import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/Services/Logger.service';
import { ProductService } from 'src/app/Services/Product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private prodServ:ProductService) { }
   data:any;
  ngOnInit(): void {
  this.data= this.prodServ.getData();
  console.log(this.data);
  }


}
