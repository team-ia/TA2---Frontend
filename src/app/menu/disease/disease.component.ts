import { Component, OnInit } from '@angular/core';
import { Disease } from 'src/app/core/models/disease.model';
import { TypeOfDisease } from 'src/app/core/models/type-of-disease.model';
import { MenuService } from 'src/app/core/services/menu.service';
import { TypeOfDiseaseService } from 'src/app/core/services/type-of-disease.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss'],
})
export class DiseaseComponent implements OnInit {
  typeOfDiseases: TypeOfDisease[] = [];

  constructor(
    private typeOfDiseaseService: TypeOfDiseaseService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.loadTypeOfDiseases();
  }

  async loadTypeOfDiseases() {
    this.typeOfDiseases = await this.typeOfDiseaseService.getTypeOfDiseases();
  }

  onClickDisease(diseaseSelection: Disease) {
    let diseases = this.menuService.diseases.value;
    let indexOfDiseases = diseases.findIndex(
      (disease) => diseaseSelection.nombre == disease.nombre
    );
    if (indexOfDiseases != -1) {
      diseases.splice(indexOfDiseases, 1);
    } else {
      diseases.push(diseaseSelection);
    }
    this.menuService.diseases.next(diseases);
  }
}
