import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModuleService } from '../http-client-module.service';
import { Transaction } from '../transactions';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css'],
})
export class DetailsComponentComponent implements OnInit {
  id: string = '';
  transaction: Transaction | null = null; // Añade esta línea

  constructor(
    private route: ActivatedRoute,
    private httpClientModuleService: HttpClientModuleService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = id;
      this.httpClientModuleService
        .getTransactionById(this.id)
        .subscribe((data) => {
          this.transaction = data; // Cambia 'transactions' a 'transaction'
          console.log(this.transaction);
        });
    }
  }
}
