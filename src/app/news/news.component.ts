import { Component, OnInit } from '@angular/core';

import { NewsService } from '../shared/news/news.service';

@Component({
  selector: 'lmr-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  defaultImage: string;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.defaultImage = this.newsService.defaultNewImage;
  }
}
