import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reactiveForm=new FormGroup({
    id:new FormControl('0',[Validators.required,Validators.min(1)]),
    name:new FormControl('enter name',Validators.minLength(2)),
    email:new FormControl()
  });


  onSubmit()
  {
    console.log(this.reactiveForm.value);
  }
}
