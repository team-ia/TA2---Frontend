import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AllergyComponent } from './menu/allergy/allergy.component';
import { DiseaseComponent } from './menu/disease/disease.component';
import { PlateComponent } from './menu/plate/plate.component';
import { TypeOfDiseaseComponent } from './menu/type-of-disease/type-of-disease.component';

const routes: Routes = [
  {
    path: 'menu',
    component: LayoutComponent,
    children: [
      {
        path: 'tipo-de-enfermedad',
        component: TypeOfDiseaseComponent,
      },
      {
        path: 'enfermedades',
        component: DiseaseComponent,
      },
      {
        path: 'alergias',
        component: AllergyComponent,
      },
      {
        path: 'recomendacion',
        component: PlateComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'menu/tipo-de-enfermedad',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
