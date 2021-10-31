import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { BikeDetailComponent } from './bike-details/bike-detail/bike-detail.component';
import { BikeDetailListComponent } from './bike-details/bike-detail-list/bike-detail-list.component';
import { SharedService } from './shared.service';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    BikeDetailsComponent,
    BikeDetailComponent,
    BikeDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
