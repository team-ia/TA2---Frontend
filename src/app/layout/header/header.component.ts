import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  typeOfDiseasesSubscription: Subscription;
  allergiesSubscription: Subscription;
  diseasesSubscription: Subscription;
  typeOfDisease: String;
  allergies: String[];
  diseases: String[];

  constructor(private menuService: MenuService) {
    this.typeOfDiseasesSubscription = this.menuService.typeOfDiseases.subscribe(
      (typeOfPlates) => {
        this.typeOfDisease = typeOfPlates;
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
    this.typeOfDiseasesSubscription.unsubscribe();
    this.allergiesSubscription.unsubscribe();
    this.diseasesSubscription.unsubscribe();
  }
}
