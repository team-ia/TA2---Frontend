import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeOfDisease } from '../models/type-of-disease.model';
import { DiseaseService } from './disease.service';

@Injectable({
  providedIn: 'root',
})
export class TypeOfDiseaseService {
  constructor(
    private httpClient: HttpClient,
    private diseaseService: DiseaseService
  ) {}

  async getTypeOfDiseases() {
    return await this.httpClient
      .get<TypeOfDisease[]>('end-points/type-of-diases.json')
      .toPromise()
      .then((typeOfDiseases) => {
        typeOfDiseases.forEach(async (typeOfDisease) => {
          typeOfDisease.diseases = await this.diseaseService.getDiseases(
            typeOfDisease
          );
        });
        return typeOfDiseases;
      });
  }
}
