import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { HttpClientModule } from '@angular/common/http';
import { CarTableComponent } from './components/car-table/car-table.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { carsReducer } from './car-tool.reducers';
import { CarToolEffects } from './car-tool.effects';
import { CarFormComponent } from './components/car-form/car-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarHomeComponent, CarTableComponent, CarFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ cars: carsReducer }),
    EffectsModule.forRoot([CarToolEffects]),
    StoreDevtoolsModule.instrument(),
    ReactiveFormsModule
  ],
  exports: [CarHomeComponent]
})
export class CarToolModule { }
