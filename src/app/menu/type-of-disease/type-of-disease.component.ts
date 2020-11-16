import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { TypeOfDiseaseService } from 'src/app/core/services/type-of-disease.service';

@Component({
  selector: 'app-type-of-disease',
  templateUrl: './type-of-disease.component.html',
  styleUrls: ['./type-of-disease.component.scss'],
})
export class TypeOfDiseaseComponent implements OnInit {
  typeOfDiseases: String[] = [];

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

  onClickTypeOfDisease(typeOfDiseaseSelection: String) {
    this.menuService.typeOfDiseases.next(typeOfDiseaseSelection);
  }
}
