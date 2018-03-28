import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-keg-new',
  templateUrl: './keg-new.component.html',
  styleUrls: ['./keg-new.component.css']
})
export class KegNewComponent implements OnInit {

  @Output() sendKeg = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submitForm(name:string, price:string, abv:string) {
    this.sendKeg.emit(new Keg(name, parseInt(price), parseInt(abv)));
  }

}
