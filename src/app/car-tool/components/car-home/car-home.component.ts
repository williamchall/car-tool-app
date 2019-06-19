import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../models/car';
import { Store, select } from '@ngrx/store';
import { CarToolState } from '../../car-tool.state';
import { RefreshCarsRequestAction } from '../../car-tool.actions';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {
  public cars$: Observable<Car[]>;

  constructor(private store: Store<CarToolState>,
  ) {
  }


  ngOnInit() {
    this.cars$ = this.store.pipe(select('cars'));
    this.store.dispatch(new RefreshCarsRequestAction());
  }

}
