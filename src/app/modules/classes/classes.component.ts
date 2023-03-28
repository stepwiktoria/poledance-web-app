import { Component, OnInit } from '@angular/core';

declare let lb: any;

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    lb('mounted');
  }

}