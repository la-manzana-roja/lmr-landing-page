import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsService } from '../shared/news/news.service';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule],
  providers: [NewsService]
})
export class NewsModule {}
