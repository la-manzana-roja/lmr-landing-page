import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsService } from '../shared/news/news.service';
import { TopNewModule } from '../shared/news/top-new/top-new.module';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule, TopNewModule],
  providers: [NewsService]
})
export class NewsModule {}
