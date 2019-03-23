import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CloudFunctions } from 'src/app/shared/data/cloud-functions';
import { New } from 'src/app/shared/models/new';
import { NewsService } from 'src/app/shared/news/news.service';

@Component({
  selector: 'lmr-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {
  news$: Observable<New[]>;
  defaultImage: string;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.news$ = this.newsService.getTopNews();
    this.defaultImage = this.newsService.defaultNewImage;
  }

  updateNewViews(link: New): void {
    this.newsService
      .updateUsingCloudFunction(link.id, CloudFunctions.updateNewViews)
      .subscribe();
  }
}
