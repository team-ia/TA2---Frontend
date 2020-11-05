import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disease } from '../models/disease.model';
import { TypeOfAllergy } from '../models/type-of-allergy.model';

@Injectable({
  providedIn: 'root',
})
export class AllergyService {
  constructor(private httpClient: HttpClient) {}

  async getAllergies(typeOfAllergy: TypeOfAllergy) {
    return await this.httpClient
      .get<Disease[]>(`end-points/allergies.json?tipo=${typeOfAllergy.nombre}`)
      .toPromise();
  }
}
