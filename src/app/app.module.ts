import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { TableModule } from "primeng/table";
// import { ToastModule } from "primeng/toast";
import { CalendarModule } from "primeng/calendar";
import { AccordionModule } from 'primeng/accordion';
import { DogComponent } from './dog/dog.component';     //accordion and accordion tab
import { ServicesModule } from './services/services.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import {ChipsModule} from 'primeng/chips';
import { DogDetailComponent } from './dog/dog-detail/dog-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    DogDetailComponent
  ],
  imports: [
    AccordionModule,
    ServicesModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    CalendarModule,
    DialogModule,
    ChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
