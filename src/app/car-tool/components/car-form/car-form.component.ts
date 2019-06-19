import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppendCarAction, RefreshCarsRequestAction } from '../../car-tool.actions';
import { Car } from '../../models/car';
import { Store, select } from '@ngrx/store';
import { CarToolState } from '../../car-tool.state';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  make = new FormControl('');
  model = new FormControl('');
  year = new FormControl('');

  constructor(private store: Store<CarToolState>,) { }

  ngOnInit() {
  }

  doAddCar() {
    let newCar: Car = {
      "make": this.make.value,
      "model": this.model.value,
      "year": this.year.value
    };

    this.store.dispatch(new AppendCarAction({car:newCar}));
    this.store.dispatch(new RefreshCarsRequestAction());

  }
}
