import { Component, OnInit } from '@angular/core';
import { DiseaseService } from 'src/app/core/services/disease.service';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss'],
})
export class DiseaseComponent implements OnInit {
  typeOfDisease: String;
  diseases: String[];

  constructor(
    private menuService: MenuService,
    private diseaseService: DiseaseService
  ) {}

  ngOnInit(): void {
    this.loadTypeOfDisease();
    this.loadDiseases();
  }

  loadTypeOfDisease() {
    this.typeOfDisease = this.menuService.typeOfDiseases.value;
  }

  async loadDiseases() {
    this.diseases = await this.diseaseService.getDiseases(this.typeOfDisease);
  }

  onClickDisease(diseaseSelection: String) {
    let diseases = this.menuService.diseases.value;
    let indexOfDiseases = diseases.findIndex(
      (disease) => diseaseSelection == disease
    );
    if (indexOfDiseases != -1) {
      diseases.splice(indexOfDiseases, 1);
    } else {
      diseases.push(diseaseSelection);
    }
    this.menuService.diseases.next(diseases);
  }
}
