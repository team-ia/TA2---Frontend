import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeOfPlate } from '../models/type-of-plate.model';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root',
})
export class PlateService {
  constructor(
    private httpClient: HttpClient,
    private menuService: MenuService
  ) {}

  async getPlates() {
    const typeOfPlates = this.menuService.typeOfPlates.value;
    const typeOfPlate = typeOfPlates[0];

    const diseases = this.menuService.diseases.value;
    const diseasesWithOnlyName = [];

    diseases.forEach((disease) => {
      diseasesWithOnlyName.push(disease.nombre);
    });

    const allergies = this.menuService.allergies.value;
    const allergiesWithOnlyName = [];

    allergies.forEach((allergy) => {
      allergiesWithOnlyName.push(allergy.nombre);
    });

    return await this.httpClient
      .get<TypeOfPlate[]>(
        `end-points/plates.json?tipo=${
          typeOfPlate.nombre
        }&enfermedades=${diseasesWithOnlyName.join(
          ','
        )}&ingredientes=${allergiesWithOnlyName.join(',')}`
      )
      .toPromise();
  }
}
