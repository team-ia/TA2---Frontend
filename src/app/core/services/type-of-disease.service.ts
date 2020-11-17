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
      .get<String[]>(`${environment.API}/tipo_enfermedades`)
      .toPromise();
  }
}
