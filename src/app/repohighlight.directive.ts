import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRepohighlight]'
})
export class RepohighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('lightblue');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }
  private highlight(color:string){
    this.elem.nativeElement.style.backgroundColor=color;
  }

}
