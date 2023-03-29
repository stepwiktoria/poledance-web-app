import { Component, OnInit } from '@angular/core';
declare let lb: any;
@Component({
  selector: 'app-offerkids',
  templateUrl: './offerkids.component.html',
  styleUrls: ['./offerkids.component.scss']
})
export class OfferkidsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    lb('mounted');
  }

}
