import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appElse]'
})
export class ElseDirective {
  @Input() set appElse(condition: boolean) {
    if (!condition) {
      this.ViewContainerRef.createEmbeddedView(this.TemplateRef);
    } else {
      this.ViewContainerRef.clear();
    }
  }

  constructor(private TemplateRef: TemplateRef<any>, private ViewContainerRef: ViewContainerRef) {
  }

}
