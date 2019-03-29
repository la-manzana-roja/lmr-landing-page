import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { NewsService } from '../shared/news/news.service';
import { ParallaxDirective } from '../shared/parallax/parallax.directive';
import { TopNewModule } from '../shared/news/top-new/top-new.module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    TopNewsComponent,
    ParallaxDirective
  ],
  imports: [CommonModule, RouterModule, TopNewModule],
  providers: [NewsService]
})
export class HomeModule {}
