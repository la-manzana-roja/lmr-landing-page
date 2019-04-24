import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { environment } from 'src/environments/environment';
import { CollapsibleDirective } from '../shared/collapsible/collapsible.directive';

@NgModule({
  declarations: [ContactUsComponent, CollapsibleDirective],
  imports: [
    FormsModule,
    CommonModule,
    ContactUsRoutingModule,
    AgmCoreModule.forRoot(environment.googleMaps)
  ]
})
export class ContactUsModule { }
