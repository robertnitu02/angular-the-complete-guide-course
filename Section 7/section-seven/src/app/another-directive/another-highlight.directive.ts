import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAnotherHighlight]'
})
export class AnotherHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'black';

  constructor() { }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.backgroundColor = 'orange';
    this.color = 'red';
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.backgroundColor = 'transparent';
    this.color = 'black';
  }
}
