import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcRoutingModule } from './calc-routing.module';
import { CalcComponent } from './calc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalcComponent
  ],
  imports: [
    CommonModule,
    CalcRoutingModule
  ],
  exports: [
    CalcComponent
  ]
})
export class CalcModule { }
