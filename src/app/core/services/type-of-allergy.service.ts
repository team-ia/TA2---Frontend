import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeOfAllergy } from '../models/type-of-allergy.model';
import { TypeOfDisease } from '../models/type-of-disease.model';
import { AllergyService } from './allergy.service';

@Injectable({
  providedIn: 'root',
})
export class TypeOfAllergyService {
  constructor(
    private httpClient: HttpClient,
    private allergyService: AllergyService
  ) {}

  async getTypeOfAllergies() {
    return await this.httpClient
      .get<TypeOfAllergy[]>('end-points/type-of-allergies.json')
      .toPromise()
      .then((typeOfAllergies) => {
        typeOfAllergies.forEach(async (typeOfAllergy) => {
          typeOfAllergy.allergies = await this.allergyService.getAllergies(
            typeOfAllergy
          );
        });
        return typeOfAllergies;
      });
  }
}
