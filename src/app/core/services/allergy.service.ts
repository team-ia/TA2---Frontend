import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AllergyService {
  constructor(private httpClient: HttpClient) {}

  async getAllergies() {
    return await this.httpClient
      .get<String[]>(`end-points/allergies.json`)
      .toPromise();
  }
}
