import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { AllergyComponent } from './allergy/allergy.component';
import { DiseaseComponent } from './disease/disease.component';
import { PlateComponent } from './plate/plate.component';
import { TypeOfPlateComponent } from './type-of-plate/type-of-plate.component';
@NgModule({
  declarations: [
    TypeOfPlateComponent,
    DiseaseComponent,
    AllergyComponent,
    PlateComponent,
  ],
  imports: [CommonModule, NzCardModule, NzDividerModule, NzNotificationModule],
})
export class MenuModule {}
