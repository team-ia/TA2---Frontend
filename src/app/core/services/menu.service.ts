import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

export enum Step {
  TYPE_OF_DISEASE = 0,
  DISEASE = 1,
  ALLERGY = 2,
  RECOMMEND = 3,
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  stepper = new BehaviorSubject<number>(Step.TYPE_OF_DISEASE);
  stepSubscription: Subscription;

  typeOfDiseases = new BehaviorSubject<String>('');
  allergies = new BehaviorSubject<String[]>([]);
  diseases = new BehaviorSubject<String[]>([]);

  constructor(private router: Router) {
    this.stepSubscription = this.stepper.subscribe((step) => {
      if (step == Step.TYPE_OF_DISEASE) {
        this.router.navigate(['/menu/tipo-de-enfermedad']);
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
