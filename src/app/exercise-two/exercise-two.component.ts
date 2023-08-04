import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css'],
})
export class ExerciseTwoComponent {
  num1 = 0;
  num2 = 0;
  operation = 'add';
  result = 0;
  history: any[] = [];

  calculate() {
    let operationSymbol = '';
    switch (this.operation) {
      case 'add':
        this.result = this.num1 + this.num2;
        operationSymbol = '+';
        break;
      case 'subtract':
        this.result = this.num1 - this.num2;
        operationSymbol = '-';
        break;
      case 'multiply':
        this.result = this.num1 * this.num2;
        operationSymbol = '*';
        break;
      case 'divide':
        if (this.num2 !== 0) {
          this.result = this.num1 / this.num2;
          operationSymbol = '/';
        } else {
          alert('Cannot divide by zero');
          return;
        }
        break;
    }

    this.history.push({
      time: new Date().toLocaleString(),
      operation: `${this.num1} ${operationSymbol} ${this.num2}`,
      result: this.result,
    });
  }

  deleteEntry(entry: any) {
    const index = this.history.indexOf(entry);
    if (index > -1) {
      this.history.splice(index, 1);
    }
  }
}
