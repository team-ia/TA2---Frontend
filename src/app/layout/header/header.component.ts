import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Allergy } from 'src/app/core/models/allergy.model';
import { Disease } from 'src/app/core/models/disease.model';
import { TypeOfPlate } from 'src/app/core/models/type-of-plate.model';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  typeOfPlatesSubscription: Subscription;
  allergiesSubscription: Subscription;
  diseasesSubscription: Subscription;
  typeOfPlates: TypeOfPlate[];
  allergies: Allergy[];
  diseases: Disease[];

  constructor(private menuService: MenuService) {
    this.typeOfPlatesSubscription = this.menuService.typeOfPlates.subscribe(
      (typeOfPlates) => {
        this.typeOfPlates = typeOfPlates;
      }
    );

    this.allergiesSubscription = this.menuService.allergies.subscribe(
      (allergies) => {
        this.allergies = allergies;
      }
    );

    this.diseasesSubscription = this.menuService.diseases.subscribe(
      (diseases) => {
        this.diseases = diseases;
      }
    );
  }

  onClickLogo() {
    this.menuService.stepper.next(0);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.typeOfPlatesSubscription.unsubscribe();
    this.allergiesSubscription.unsubscribe();
    this.diseasesSubscription.unsubscribe();
  }
}
