import { Component, OnInit, Input, Output } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  @Input() childKegList: Keg[];
  constructor() {}

  ngOnInit() {
    this.childKegList.push(new Keg('beer', 3.5, 110));
    this.childKegList.push(new Keg('bear', 3.6, 120));
  }
}
