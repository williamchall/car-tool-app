import { Action } from '@ngrx/store';
import { Car } from './models/car';

export enum CarToolActions {
    RefreshCarsRequest = '[CarTool] Refresh Cars Request',
    RefreshCarsDone = '[CarTool] Refresh Cars Done',
    AppendCarAction = '[CarTool Append Car',
}

export class RefreshCarsRequestAction implements Action {
    type = CarToolActions.RefreshCarsRequest;
}

export class RefreshCarsDoneAction implements Action {
    type = CarToolActions.RefreshCarsDone;
    constructor(public payload: { cars: Car[] }) { }
}

export class AppendCarAction implements Action {
    type = CarToolActions.AppendCarAction;
    constructor(public payload: {  car: Car } ) { }
}

export type CarToolActionsUnion =
    RefreshCarsRequestAction |
    RefreshCarsDoneAction;