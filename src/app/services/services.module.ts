import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogService } from './dog.service';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DogService
  ],

})
export class ServicesModule { }
