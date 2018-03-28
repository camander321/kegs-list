import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { KegEditComponent } from './keg-edit/keg-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    KegEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
