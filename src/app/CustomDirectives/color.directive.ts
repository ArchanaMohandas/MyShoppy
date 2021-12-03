import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";


@Directive({
  selector:'[cusTheme]'
})

export class customColorDirective implements AfterViewInit{

@Input() color:string='';
@Input() size:string='';

constructor(private eleRef:ElementRef){

}


ngAfterViewInit()
{

    this.eleRef.nativeElement.style.color=this.color;
    this.eleRef.nativeElement.style.fontSize=this.size;
}
}