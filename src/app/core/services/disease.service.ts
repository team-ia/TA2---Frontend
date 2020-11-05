import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disease } from '../models/disease.model';
import { TypeOfDisease } from '../models/type-of-disease.model';

@Injectable({
  providedIn: 'root',
})
export class DiseaseService {
  constructor(private httpClient: HttpClient) {}

  async getDiseases(typeOfDiase: TypeOfDisease) {
    return await this.httpClient
      .get<Disease[]>(`end-points/diases.json?tipo=${typeOfDiase.nombre}`)
      .toPromise();
  }
}
