import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [CarHomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [CarHomeComponent]
})
export class CarToolModule { }
