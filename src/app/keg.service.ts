import { Injectable } from '@angular/core';
import { Keg } from './models/keg.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class KegService {
  kegs: FirebaseListObservable<Keg[]>;
  constructor(private database: AngularFireDatabase) {
    this.kegs = database.list('kegs');
  }

  getKegs(){
    return this.kegs;
  }

}
