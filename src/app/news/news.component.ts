import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CloudFunctions } from '../shared/data/cloud-functions';
import { New } from '../shared/models/new';
import { NewsService } from '../shared/news/news.service';

@Component({
  selector: 'lmr-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news$: Observable<New[]>;
  topNews$: Observable<New[]>;
  defaultImage: string;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.news$ = this.newsService.getAllNews();
    this.topNews$ = this.newsService.getTopNews();
    this.defaultImage = this.newsService.defaultNewImage;
  }

  updateNewViews(link: New): void {
    this.newsService
      .updateUsingCloudFunction(link.id, CloudFunctions.updateNewViews)
      .subscribe();
  }
}
