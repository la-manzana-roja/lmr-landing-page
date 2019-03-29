import { Component, Input } from '@angular/core';

import { New } from '../../models/new';
import { NewsService } from '../news.service';

@Component({
  selector: 'lmr-top-new',
  templateUrl: './top-new.component.html',
  styleUrls: ['./top-new.component.scss'],
  providers: [NewsService]
})
export class TopNewComponent {
  @Input() link: New;
  defaultImage: string;

  constructor(newsService: NewsService) {
    this.defaultImage = newsService.defaultNewImage;
  }
}
