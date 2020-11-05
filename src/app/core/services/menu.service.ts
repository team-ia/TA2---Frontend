import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Allergy } from '../models/allergy.model';
import { Disease } from '../models/disease.model';
import { TypeOfPlate } from '../models/type-of-plate.model';

export enum Step {
  TYPE_OF_PLATE = 0,
  DISEASE = 1,
  ALLERGY = 2,
  RECOMMEND = 3,
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  stepper = new BehaviorSubject<number>(Step.TYPE_OF_PLATE);
  stepSubscription: Subscription;

  typeOfPlates = new BehaviorSubject<TypeOfPlate[]>([]);
  allergies = new BehaviorSubject<Allergy[]>([]);
  diseases = new BehaviorSubject<Disease[]>([]);

  constructor(private router: Router) {
    this.stepSubscription = this.stepper.subscribe((step) => {
      if (step == Step.TYPE_OF_PLATE) {
        this.router.navigate(['/menu/tipo-de-plato']);
      } else if (step == Step.DISEASE) {
        this.router.navigate(['/menu/enfermedades']);
      } else if (step == Step.ALLERGY) {
        this.router.navigate(['/menu/alergias']);
      } else if (step == Step.RECOMMEND) {
        this.router.navigate(['/menu/recomendacion']);
      }
    });
  }
}
