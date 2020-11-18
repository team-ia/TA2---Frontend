import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TypeOfDisease } from '../models/type-of-disease.model';

@Injectable({
  providedIn: 'root',
})
export class TypeOfDiseaseService {
  constructor(private httpClient: HttpClient) {}

  async getTypeOfDiseases() {
    return await this.httpClient
      .get<TypeOfDisease[]>(`${environment.API}/tipo_enfermedades`)
      .toPromise();
  }
}
