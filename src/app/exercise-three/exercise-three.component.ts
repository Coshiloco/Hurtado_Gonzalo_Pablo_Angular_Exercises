import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';
import { HttpClientModuleService } from '../http-client-module.service';
import { Transaction } from '../transactions';

@Component({
  selector: 'app-exercise-three',
  templateUrl: './exercise-three.component.html',
  styleUrls: ['./exercise-three.component.css'],
})
export class ExerciseThreeComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(
    private headerService: HeaderServiceService,
    private httpClientModuleService: HttpClientModuleService
  ) {}

  sort(key: keyof Transaction) {
    this.transactions.sort((a: Transaction, b: Transaction) =>
      a[key] > b[key] ? 1 : -1
    );
  }

  ngOnInit() {
    this.headerService.changeMenuTitle('ANGULAR EXERCISES');
    this.headerService.changeExerciseOne('ExerciseOne');
    this.headerService.changeExerciseTwo('ExerciseTwo');
    this.headerService.changeExerciseThree('ExerciseThree');

    this.httpClientModuleService.getTransactions().subscribe((data) => {
      this.transactions = data;
      console.log(this.transactions);
    });
  }
}
