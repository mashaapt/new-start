import { Component } from '@angular/core';
// import { result } from 'lodash';

export type Operator = '/' | '*' | '-' | '+';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})
export class CalcComponent {

  sign: 1 | -1 = 1;
  currVal: any = '0';
  lastVal: any;
  displayHasLastNum: boolean;
  val: any;
  operator: Operator;
  isDecimal: boolean = false;
  result: number;
  deleteLastVal: boolean;
  deleteAllVals: boolean;
  // savedPreviousNum: number;
  // anotherRound = false;

  justCalculated = false;


  clickedChangeSign() {
    if (this.sign) {
      this.currVal *= -1;
    }
  }

  onClickVal(clickedVal: string) {

    if (this.currVal === '0' || this.operator ) {
      this.displayHasLastNum = true;

      // if(this.savedPreviousNum) {
      //   this.lastVal = this.savedPreviousNum;
      //   // this.currVal += clickedVal.toString();
      // }

      if(this.result) {
        this.lastVal = this.result;
      }

      this.currVal = clickedVal.toString();
    } else {
      
      this.currVal += clickedVal.toString();
    }

    console.log(clickedVal);

  }


  clickedOperator(selectedOperator: Operator) {
   
    if(!this.justCalculated) {

      if (this.operator) {
   
        this.calculateResult();
      } else if(selectedOperator !== this.operator) { 
        this.lastVal = +this.currVal;
  
      }
    }

    this.justCalculated = false;
    this.operator = selectedOperator;



  }

  calculateResult() {
    const currVal = +this.currVal;
    this.currVal = '0';
    
    // if (this.savedPreviousNum) {
    //   this.lastVal = this.savedPreviousNum;
    //   this.savedPreviousNum = null;
    // }

    if(this.result) {
      this.lastVal = this.result;
      
    }

    this.justCalculated = true;
    
    switch (this.operator) {
      case '/':
        this.result = this.lastVal / currVal;
        break;
      case '*':
        this.result = this.lastVal * currVal;
        break;
      case '-':
        this.result = this.lastVal - currVal;
        break;
      case '+':
        this.result = this.lastVal + currVal;
        break;
      default:
        console.log('error')
        break;
    }

    
  }

  clickedComma() {
    this.currVal += '.';
    this.isDecimal = true;
  }

  clickedPercent() {
    this.currVal /= 100;
  }

  clickedEquals() {
    this.calculateResult();

  }

  clickedClear() {
    if (this.result) {

      this.lastVal = this.result;
      this.result = null;
      this.deleteAllVals = true;
    } else {
      this.deleteLastVal = true;
      this.lastVal = null;
    }


    // if(!this.displayHasLastNum) {
    //   this.anotherRound = false;
    // }


    this.currVal = '0';
    this.displayHasLastNum = false;
  }
}
