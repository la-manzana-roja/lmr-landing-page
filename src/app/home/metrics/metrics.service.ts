import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

import { Metric } from 'src/app/shared/models/metric';
import { DataService } from 'src/app/shared/data/data.service';
import { FirestoreCollections } from 'src/app/shared/data/firestore-collections';

@Injectable()
export class MetricsService extends DataService<Metric> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirestoreCollections.metrics);
  }
}
