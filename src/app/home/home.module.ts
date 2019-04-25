import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { MetricsComponent } from './metrics/metrics.component';

import { TopNewsComponent } from './top-news/top-news.component';
import { NewsService } from '../shared/news/news.service';
import { ParallaxDirective } from '../shared/parallax/parallax.directive';
import { TopNewModule } from '../shared/news/top-new/top-new.module';
import { MetricsService } from './metrics/metrics.service';
import { AboutUsPreviewComponent } from './about-us-preview/about-us-preview.component';
import { OportunitiesComponent } from './oportunities/oportunities.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    TopNewsComponent,
    ParallaxDirective,
    MetricsComponent,
    AboutUsPreviewComponent,
    OportunitiesComponent
  ],
  imports: [CommonModule, RouterModule, TopNewModule],
  providers: [NewsService, MetricsService]
})
export class HomeModule {}
