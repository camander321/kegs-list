import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  masterKegList: Keg[] = [];
  selectedKeg: Keg = null;
  constructor() {
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  submitForm(newKeg:Keg){
    this.masterKegList.push(newKeg);
  }

  removeKeg(){
    let index = this.masterKegList.indexOf(this.selectedKeg);
    this.masterKegList.splice(index, 1);
    this.selectedKeg = null;
  }
}
