import { Component, OnInit } from '@angular/core';
import { Allergy } from 'src/app/core/models/allergy.model';
import { TypeOfAllergy } from 'src/app/core/models/type-of-allergy.model';
import { MenuService } from 'src/app/core/services/menu.service';
import { TypeOfAllergyService } from 'src/app/core/services/type-of-allergy.service';
@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.scss'],
})
export class AllergyComponent implements OnInit {
  typeOfAllergies: TypeOfAllergy[] = [];

  constructor(
    private typeOfAllergyService: TypeOfAllergyService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.loadTypeOfAllergies();
  }

  async loadTypeOfAllergies() {
    this.typeOfAllergies = await this.typeOfAllergyService.getTypeOfAllergies();
    console.log(this.typeOfAllergies)
  }

  onClickAllergy(allergySelection: Allergy) {
    let allergies = this.menuService.allergies.value;
    let indexOfAllergies = allergies.findIndex(
      (allergy) => allergySelection.nombre == allergy.nombre
    );
    if (indexOfAllergies != -1) {
      allergies.splice(indexOfAllergies, 1);
    } else {
      allergies.push(allergySelection);
    }
    this.menuService.allergies.next(allergies);
  }
}
