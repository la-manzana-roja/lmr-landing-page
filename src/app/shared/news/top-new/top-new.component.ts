import { Component, Input } from '@angular/core';

import { CloudFunctions } from '../../data/cloud-functions';
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

  constructor(private newsService: NewsService) {
    this.defaultImage = newsService.defaultNewImage;
  }

  updateNewViews(link: New): void {
    this.newsService
      .updateUsingCloudFunction(link.id, CloudFunctions.updateNewViews)
      .subscribe();
  }
}
