import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/Models/Customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @ViewChild('AddCustomer') AddCustomer:any;
  constructor() { }

  customer:Customer=new Customer();

  ngOnInit(): void {
this.customer={
  custName:'',
  custAge:0,
  custEmail:'',
  isRegularCustomer:false,
  custCity:'',
  custPhone:0,
  customerId:0
}

  }

  CreateCustomer()
  {
    console.log(this.AddCustomer.value);

  }
}
