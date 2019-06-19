import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CarsService } from './services/cars.service';
import { CarToolActionsUnion, RefreshCarsRequestAction, RefreshCarsDoneAction, CarToolActions, AppendCarAction } from './car-tool.actions';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators'
import { Action } from 'rxjs/internal/scheduler/Action';
import { Car } from './models/car';
@Injectable({
    providedIn: 'root',
})
export class CarToolEffects {
    constructor(
        private carsSvc: CarsService,
        private actions$: Actions<CarToolActionsUnion>,
    ) { }

    @Effect()
    refreshCars$: Observable<RefreshCarsDoneAction> = this.actions$.pipe(
        ofType(CarToolActions.RefreshCarsRequest),
        switchMap((action: RefreshCarsRequestAction) => {
            return this.carsSvc.all().pipe(
                map(cars => new RefreshCarsDoneAction({ cars })),
            );
        })
    );

    @Effect()
    addCar$: Observable<AppendCarAction> = this.actions$.pipe(
        ofType(CarToolActions.AppendCarAction),
        switchMap((action: AppendCarAction) => {
            return this.carsSvc.appendCar(action.payload.car).pipe(
                map(car => new AppendCarAction({ car })),
            );
        })
    )
}