import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNewComponent } from './top-new.component';

@NgModule({
  declarations: [TopNewComponent],
  imports: [CommonModule],
  exports: [TopNewComponent]
})
export class TopNewModule {}
