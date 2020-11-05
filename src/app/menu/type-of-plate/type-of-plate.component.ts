import { Component, OnInit } from '@angular/core';
import { TypeOfPlate } from 'src/app/core/models/type-of-plate.model';
import { MenuService } from 'src/app/core/services/menu.service';
import { TypeOfPlateService } from 'src/app/core/services/type-of-plate.service';

@Component({
  selector: 'app-type-of-plate',
  templateUrl: './type-of-plate.component.html',
  styleUrls: ['./type-of-plate.component.scss'],
})
export class TypeOfPlateComponent implements OnInit {
  typeOfPlates: TypeOfPlate[] = [];

  constructor(
    private typeOfPlateService: TypeOfPlateService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.loadTypeOfPlates();
  }

  async loadTypeOfPlates() {
    this.typeOfPlates = await this.typeOfPlateService.getTypeOfPlates();
  }

  onClickTypeOfPlate(typeOfPlateSelection: TypeOfPlate) {
    let typeOfPlates = this.menuService.typeOfPlates.value;
    let indexOfTypeOfPlates = typeOfPlates.findIndex(
      (typeOfPlate) => typeOfPlateSelection.nombre == typeOfPlate.nombre
    );

    if (indexOfTypeOfPlates != -1) {
      typeOfPlates.splice(indexOfTypeOfPlates, 1);
    } else {
      typeOfPlates.push(typeOfPlateSelection);
    }

    this.menuService.typeOfPlates.next(typeOfPlates);
  }
}
