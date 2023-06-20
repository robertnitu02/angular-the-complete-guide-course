import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'pink');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'hotpink');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'pink');
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'hotpink');
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
