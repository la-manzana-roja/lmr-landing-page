import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataService } from '../data/data.service';
import { CloudFunctions } from '../data/cloud-functions';
import { FirestoreCollections } from '../data/firestore-collections';
import { New } from '../models/new';

const DEFAULT_NEW_IMAGE = 'assets/images/logo-01.png';
const MAX_TOP_NEWS_LENGTH = 3;

@Injectable()
export class NewsService extends DataService<New> {
  defaultNewImage = DEFAULT_NEW_IMAGE;

  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirestoreCollections.news);
  }

  getAllNews(): Observable<New[]> {
    return this.getAll().pipe(
      map(news => {
        this.verifyNewsAndUpdateMetadata(news);
        return news;
      })
    );
  }

  getTopNews(): Observable<New[]> {
    return this.db
      .collection<New>(this.collectionName, ref =>
        ref.orderBy('views', 'desc').limit(MAX_TOP_NEWS_LENGTH)
      )
      .valueChanges()
      .pipe(
        map(news => {
          this.verifyNewsAndUpdateMetadata(news);
          return news;
        })
      );
  }

  private verifyNewsAndUpdateMetadata(news: New[]): void {
    news.forEach(link => {
      if (this.isNewIncomplete(link)) {
        this.updateUsingCloudFunction(
          link.id,
          CloudFunctions.updateNewMetadata
        ).subscribe();
      }
    });
  }

  private isNewIncomplete(link: New): boolean {
    return !link.title || !link.description || !link.image;
  }
}
