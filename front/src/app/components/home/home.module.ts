import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalculatorModule } from '../calculator/calculator.module';
import { CalcModule } from '../calc/calc.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalculatorModule,
    CalcModule
  ]
})
export class HomeModule { }
