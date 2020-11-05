import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Allergy } from '../models/allergy.model';
import { Disease } from '../models/disease.model';
import { TypeOfPlate } from '../models/type-of-plate.model';

export enum Step {
  TYPE_OF_PLATE = 0,
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  stepper = new BehaviorSubject<number>(Step.TYPE_OF_PLATE);

  typeOfPlates = new BehaviorSubject<TypeOfPlate[]>([
    { nombre: 'entrada' },
    { nombre: 'bebidas' },
  ]);
  allergies = new BehaviorSubject<Allergy[]>([
    { nombre: 'entrada' },
    { nombre: 'bebidas' },
  ]);
  diseases = new BehaviorSubject<Disease[]>([
    { nombre: 'entrada' },
    { nombre: 'bebidas' },
  ]);

  constructor() {}
}
