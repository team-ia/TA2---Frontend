import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { DiseaseComponent } from './disease/disease.component';
import { TypeOfPlateComponent } from './type-of-plate/type-of-plate.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AllergyComponent } from './allergy/allergy.component';
@NgModule({
  declarations: [TypeOfPlateComponent, DiseaseComponent, AllergyComponent],
  imports: [CommonModule, NzCardModule, NzDividerModule, IvyCarouselModule],
})
export class MenuModule {}
