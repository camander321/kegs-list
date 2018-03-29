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

  kegList:Keg[] = [];

  constructor(private kegService: KegService) {}

  ngOnInit() {
    this.kegService.getKegs().subscribe((dataArray) => {
      dataArray.forEach((data) => {
        let newKeg:Keg = new Keg(data.name, data.price, data.abv);
        newKeg.pints = data.pints;
        this.kegList.push(newKeg);

      });
    });
  }

  kegClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sortKegs(sort: string){
    Keg.sortKegs(this.kegList, sort);
  }
}
