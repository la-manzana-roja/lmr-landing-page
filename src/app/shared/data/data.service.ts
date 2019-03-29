import { HttpClient } from '@angular/common/http';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { DataType, DataOrder } from '../models/data-type';
import { environment } from 'src/environments/environment';

export abstract class DataService<T extends DataType> {
  dataCollection: AngularFirestoreCollection<T>;

  constructor(
    protected http: HttpClient,
    protected db: AngularFirestore,
    protected collectionName: string
  ) {
    this.dataCollection = db.collection<T>(collectionName);
  }

  getAll(): Observable<T[]> {
    return this.dataCollection.valueChanges();
  }

  getAllSorted(
    field: string,
    order: DataOrder,
    maxLimit?: number
  ): Observable<T[]> {
    return this.db
      .collection<T>(this.collectionName, ref => {
        let query = ref.orderBy(field, order);
        if (maxLimit) {
          query = query.limit(maxLimit);
        }
        return query;
      })
      .valueChanges();
  }

  updateUsingCloudFunction(id: string, functionName: string): Observable<T> {
    const url = `${environment.cloudFunctionsUrl}/${functionName}`;
    const data: DataType = { id };

    return this.http.put<T>(url, data);
  }
}
