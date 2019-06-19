import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CarsService } from './services/cars.service';
import { CarToolActionsUnion, RefreshCarsRequestAction, RefreshCarsDoneAction, CarToolActions } from './car-tool.actions';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators'
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
        }),
    );
}