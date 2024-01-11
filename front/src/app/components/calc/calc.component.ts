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
  savedPreviousNum: number;
  // isResultAfterMath: boolean = false;
  anotherRound = false;

  clickedChangeSign() {
    if (this.sign) {
      this.currVal *= -1;
    }
  }

  onClickVal(lastVal: string) {

    if (this.currVal === '0' || this.operator || this.anotherRound) {
      this.displayHasLastNum = true;
      this.currVal = lastVal.toString();
    }
    // else if (this.isResultAfterMath === true) {
    //   this.lastVal = this.savedPreviousNum;
    //   this.currVal += lastVal.toString();
    // }
    else {
      this.lastVal = this.savedPreviousNum;
      this.currVal += lastVal.toString();
    }

    console.log(lastVal);

  }


  clickedOperator(selectedOperator: Operator) {
    if (this.operator) {
      // this.anotherRound;
      this.calculateResult();
    }
    // else if (this.isResultAfterMath) {
    //     // this.currVal = '0';
    //     // this.onClickVal(this.lastVal)
    //     // this.currVal += this.lastVal.toString();
    //     // this.calculateResultAfterFirstMath();

    //     this.lastVal = this.savedPreviousNum;
    //     this.calculateResult();
    //     this.savedPreviousNum = this.result;
    //     // this.savedPreviousNum = this.lastVal;
    //     this.isResultAfterMath = true;

      
    else if (this.operator && this.savedPreviousNum) {
      this.anotherRound = true;
      this.calculateResult();
    } 
    else {
      this.lastVal = +this.currVal;

    }

    this.operator = selectedOperator;



  }

  calculateResult() {
    const currVal = +this.currVal;

    if (this.savedPreviousNum && !this.anotherRound) {
      // this.onClickVal(currVal);
      this.lastVal = this.savedPreviousNum;
    }
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

  // calculateResultAfterFirstMath() {
  //   const currVal = +this.currVal;

  //   switch (this.operator) {
  //     case '/':
  //       this.result = this.savedPreviousNum / currVal;
  //       break;
  //     case '*':
  //       this.result = this.savedPreviousNum * currVal;
  //       break;
  //     case '-':
  //       this.result = this.savedPreviousNum - currVal;
  //       break;
  //     case '+':
  //       this.result = this.savedPreviousNum + currVal;
  //       break;
  //     default:
  //       console.log('error')
  //       break;
  //   }
  // }
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

      this.savedPreviousNum = this.result;
      this.result = null;
      this.deleteAllVals = true;
      // this.isResultAfterMath = true;
    } else {
      this.deleteLastVal = true;
      this.lastVal = null;
    }


    if(!this.displayHasLastNum) {
      this.anotherRound = false;
    }


    this.currVal = '0';
    this.displayHasLastNum = false;
  }
}
