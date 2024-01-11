import { Component } from '@angular/core';

export type Operator = '%' | '/' | '*' | '+' | '-';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {


  sign: 1 | -1 = 1;
  lastOperator: Operator;
  activeOperator: Operator;
  displayHasNumber: boolean;
  waitingForNumber: boolean;
  displayValue: any = '0';
  nonNum: boolean;

  lastNumber: number;

  clickNum(num: number) {
    console.log(num)

    if (this.displayValue === '0' || this.lastOperator && !this.waitingForNumber) {
      this.lastNumber = this.sign * this.displayValue;
      this.displayValue = num.toString();

      if(this.lastOperator) {
        this.waitingForNumber = true;
        this.lastOperator = null;
      }
    } else {
      this.displayValue += num;
    }

    this.displayHasNumber = true;

  }

  clickComma() {

    this.displayValue += '.';
    this.displayHasNumber = true;
  }

  clickClear() {
    this.displayValue = '0';
    this.displayHasNumber = false;
    this.sign = 1;
    this.lastOperator = null;
  }

  clickChangeSign() {
    if (this.sign != -1 && this.displayValue != '0') {
      this.sign = -1;
    } else {
      this.sign = 1;
    }
  }

  clickedOperator(operator: Operator) {
    if (this.lastOperator && this.lastNumber) {
      this.handleEquals();
      this.waitingForNumber = true;
      // this.lastOperator = null;
    }

    this.lastOperator = operator;


  }

  clickEquals() {
    this.handleEquals();
  }

  handleEquals() {
    if (this.lastOperator) {
      // const currentValue = parseFloat(this.displayValue);

      const currentValue = this.sign * this.displayValue;

      let result: number;

      switch (this.lastOperator) {
        case '%':
          result = currentValue / 100;
          break;
        case '/':
          if (currentValue !== 0) {
            result = this.lastNumber / currentValue;
          } else {
            result = NaN;
          }
          break;
        case '*':
          result = this.lastNumber * currentValue;
          break;
        case '+':
          result = this.lastNumber + currentValue;
          break;
        case '-':
          result = this.lastNumber - currentValue;
          break;
        default:
          result = NaN;
          break;
      }

      this.displayValue = result.toString();
      this.displayHasNumber = true;
      this.lastOperator = null;
      this.lastNumber = null;
    }
  }

  clickPercent() {
    this.displayValue = this.displayValue / 100;
  }
}
