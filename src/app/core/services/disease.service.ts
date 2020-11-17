import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DiseaseService {
  constructor(private httpClient: HttpClient) {}

  async getDiseases(typeOfDiase: String) {
  //  return await this.httpClient
    //  .get<String[]>(`${environment.API}/end-points/diases.json`)
     // .toPromise();

     return await this.httpClient
     .post<String[]>(
       `${environment.API}/enfermedades`
       , {
        tipo: typeOfDiase,
       }
     )
     .toPromise();
  }
}
