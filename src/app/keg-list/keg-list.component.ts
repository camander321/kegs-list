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
  @Output() clickSender = new EventEmitter();
  kegList:Keg[];
  constructor(private kegService: KegService) {}

  ngOnInit() {
    this.kegList = this.kegService.kegList;
  }

  kegClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sortKegs(sort: string){
    Keg.sortKegs(this.kegService.kegList, sort);
  }

  sellBeer(keg:Keg, amount:string) {
    keg.sellBeer(amount);
    this.kegService.editKeg(keg);
  }

  refillKeg(keg:Keg){
    keg.pints = 124;
    this.kegService.editKeg(keg);
  }
}
