import { Component, OnInit } from '@angular/core';
declare let lb: any;

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    lb('mounted');
  }

}

