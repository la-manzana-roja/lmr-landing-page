import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { MetricsComponent } from './metrics/metrics.component';

@NgModule({
  declarations: [HomeComponent, BannerComponent, MetricsComponent],
  imports: [CommonModule, FormsModule, SharedModule]
})
export class HomeModule {}
