import { Directive, OnInit, ElementRef } from '@angular/core';

import { Parallax } from 'materialize-css';

@Directive({
  selector: '[lmrParallax]'
})
export class ParallaxDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    Parallax.init(this.elementRef.nativeElement);
  }
}
