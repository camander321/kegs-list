import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-keg-edit',
  templateUrl: './keg-edit.component.html',
  styleUrls: ['./keg-edit.component.css']
})
export class KegEditComponent implements OnInit {

  @Input() selectedKeg: Keg;
  @Output() clickedDone = new EventEmitter();
  @Output() deleteKeg = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removeKeg(){
    this.deleteKeg.emit();
  }

  doneWitEdit(){
    this.clickedDone.emit();
  }

}
