import { Directive, Input, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDynamicHighlight]'
})
export class DynamicHighlightDirective implements OnInit {
  @Input() defaultColor: string;
  @Input() highlightColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() {
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
