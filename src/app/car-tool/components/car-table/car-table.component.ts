import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../models/car';
@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {
  @Input()
  cars: Car[] = [];

  constructor() { }

  ngOnInit() {
  }

}
