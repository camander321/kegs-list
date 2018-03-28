import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.childKegList.push(new Keg('"beer"', 3.5, 4));
    this.childKegList.push(new Keg('Banana in a Box', 8.50, 13));
  }

  kegClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
