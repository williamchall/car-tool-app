import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Car {
  id?: number;
  make: string;
  model: string;
  year: number;
}

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {
  public cars: Car[] = [];

  constructor(private httpClient: HttpClient) { }


  ngOnInit() {
    this.httpClient.get<Car[]>('http://localhost:4250/cars').toPromise().then(cars => this.cars = cars);
  }

}
