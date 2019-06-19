import { Car } from './models/car';
import { CarToolActions, CarToolActionsUnion, RefreshCarsDoneAction } from './car-tool.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

export const carsReducer = (state: Car[] = [], action: CarToolActionsUnion) => {
    if (action.type === CarToolActions.RefreshCarsDone) {
        return (action as RefreshCarsDoneAction).payload.cars;
    } else {
        return state;
    }
};