import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  selectedKeg:Keg = null;

  constructor() {
  }

  editKeg(kegToEdit:Keg) {
    this.selectedKeg = kegToEdit;
  }
}
