import { Injectable } from '@angular/core';
import { Keg } from './models/keg.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class KegService{
  kegData: FirebaseListObservable<any[]>;
  // kegObject: FirebaseObjectObservable<any>;
  kegList:Keg[] = [];


  constructor(private database: AngularFireDatabase) {
    this.kegData = this.database.list('kegs');
    // this.kegObject.subscribe((dataObject) => {console.log(dataObject);});

    this.kegData.subscribe((dataArray) => {
      this.kegList.length = 0;
      dataArray.forEach((data) => {
        let newKeg:Keg = new Keg(data.name, data.price, data.abv);
        newKeg.key = data.$key;
        newKeg.pints = data.pints;
        this.kegList.push(newKeg);
      });
    });
  }

  getKegs(){
    return this.kegList;
  }

  addKeg(newKeg:Keg){
    this.kegData.push(newKeg);
  }

  editKeg(clickedKeg:Keg) {
    this.database.object('/kegs/' + clickedKeg.key).update(clickedKeg);
  }

  removeKeg(clickedKeg:Keg){
    this.database.object('/kegs/' + clickedKeg.key).remove();
  }
}
