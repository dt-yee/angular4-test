import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
    ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
