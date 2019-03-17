import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxDirective } from './parallax/parallax.directive';

@NgModule({
  declarations: [ParallaxDirective],
  exports: [ParallaxDirective],
  imports: [CommonModule]
})
export class SharedModule {}
