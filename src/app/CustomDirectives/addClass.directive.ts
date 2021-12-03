import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector:'[mystyle]'
})

export class mystyleDirective implements AfterViewInit{


constructor(private ele:ElementRef)
{}

ngAfterViewInit():void{
    this.ele.nativeElement.style.color='blue';
    this.ele.nativeElement.style.fontSize='40px';
}

}
 