import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AllergyService {
  constructor(private httpClient: HttpClient) {}

  async getAllergies() {
    return await this.httpClient
      .get<String[]>(`${environment.API}/ingredients`)
      .toPromise();
  }
}
