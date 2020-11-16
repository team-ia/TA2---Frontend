import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plate } from '../models/plate.model';
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
    const diseases = this.menuService.diseases.value;
    const allergies = this.menuService.allergies.value;

    return await this.httpClient
      .get<Plate[]>(`end-points/plates.json`)
      .toPromise();

    // return await this.httpClient
    //   .post(`${environment}/platillos/2`, {
    //     enfermedades: diseases,
    //     alergias: allergies,
    //   })
    //   .toPromise();
  }
}
