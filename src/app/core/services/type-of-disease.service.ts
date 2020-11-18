import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TypeOfDiseaseService {
  constructor(private httpClient: HttpClient) {}

  async getTypeOfDiseases() {
    return await this.httpClient
      .get<TypeOfDiseaseService[]>(`${environment.API}/tipo_enfermedades`)
      .toPromise();
  }
}
