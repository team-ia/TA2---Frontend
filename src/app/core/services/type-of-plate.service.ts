import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeOfPlate } from '../models/type-of-plate.model';

@Injectable({
  providedIn: 'root',
})
export class TypeOfPlateService {
  constructor(private httpClient: HttpClient) {}

  async getTypeOfPlates() {
    return await this.httpClient
      .get<TypeOfPlate[]>('end-points/type-of-plates.json')
      .toPromise();
  }
}
