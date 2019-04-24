import { Directive, OnInit, ElementRef } from '@angular/core';
import { Collapsible } from 'materialize-css';

@Directive({
  selector: '[lmrCollapsible]',
})
export class CollapsibleDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    Collapsible.init(this.elementRef.nativeElement);
  }
}
