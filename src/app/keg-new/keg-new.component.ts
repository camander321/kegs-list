import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'
import { KegService } from '../keg.service'

@Component({
  selector: 'app-keg-new',
  templateUrl: './keg-new.component.html',
  styleUrls: ['./keg-new.component.css'],
  providers: [KegService]
})
export class KegNewComponent implements OnInit {

  constructor(private kegService: KegService) { }

  ngOnInit() {
  }

  submitForm(name:string, price:string, abv:string) {
    this.kegService.addKeg(new Keg(name, parseInt(price), parseInt(abv)));
  }

}
