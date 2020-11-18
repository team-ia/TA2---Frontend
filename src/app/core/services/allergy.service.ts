import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Allergy } from '../models/allergy.model';

@Injectable({
  providedIn: 'root',
})
export class AllergyService {
  constructor(private httpClient: HttpClient) {}

  async getAllergies() {
    return await this.httpClient
      .get<Allergy[]>(`${environment.API}/ingredients`)
      .toPromise();
  }
}
