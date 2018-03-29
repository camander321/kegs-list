import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Keg } from '../models/keg.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { KegService } from '../keg.service'


@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css'],
  providers: [KegService]
})
export class KegListComponent implements OnInit {
  // @Input() childKegList: FirebaseListObservable<any[]>;
  @Output() clickSender = new EventEmitter();

  kegList:FirebaseListObservable<Keg[]>;

  constructor(private kegService: KegService) {}

  ngOnInit() {
    this.kegList = this.kegService.getKegs();
  }

  kegClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sortKegs(sort: string){
    //Keg.sortKegs(this.childKegList, sort);
  }
}
