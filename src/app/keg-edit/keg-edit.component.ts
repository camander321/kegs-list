import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'
import { KegService } from '../keg.service'

@Component({
  selector: 'app-keg-edit',
  templateUrl: './keg-edit.component.html',
  styleUrls: ['./keg-edit.component.css'],
  providers: [KegService]
})
export class KegEditComponent implements OnInit {
  @Input() selectedKeg: Keg;
  constructor(private kegService:KegService) { }

  ngOnInit() {
  }

  removeKeg(){
    this.kegService.removeKeg(this.selectedKeg);
    this.selectedKeg = null;
  }

  doneWithEdit(){
    this.kegService.editKeg(this.selectedKeg);
    this.selectedKeg = null;
  }
}
