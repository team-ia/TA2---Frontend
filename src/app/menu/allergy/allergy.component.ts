import { Component, OnInit } from '@angular/core';
import { Allergy } from 'src/app/core/models/allergy.model';
import { AllergyService } from 'src/app/core/services/allergy.service';
import { MenuService } from 'src/app/core/services/menu.service';
@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.scss'],
})
export class AllergyComponent implements OnInit {
  allergies: Allergy[] = [];

  constructor(
    private allergyService: AllergyService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.loadAllergies();
  }

  async loadAllergies() {
    this.allergies = await this.allergyService.getAllergies();
  }

  onClickAllergy(allergySelection: String) {
    let allergies = this.menuService.allergies.value;
    let indexOfAllergies = allergies.findIndex(
      (allergy) => allergySelection == allergy
    );
    if (indexOfAllergies != -1) {
      allergies.splice(indexOfAllergies, 1);
    } else {
      allergies.push(allergySelection);
    }
    this.menuService.allergies.next(allergies);
  }
}
