import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DerivedComponent } from './derived.component';
import { BaseModule } from '../base-public-api';



@NgModule({
  declarations: [
    DerivedComponent,
  ],
  imports: [
    CommonModule,
    BaseModule,
  ],
  exports: [
    DerivedComponent,
  ]
})
export class DerivedModule { }
