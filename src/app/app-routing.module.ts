import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TypeOfPlateComponent } from './menu/type-of-plate/type-of-plate.component';

const routes: Routes = [
  {
    path: 'menu',
    component: LayoutComponent,
    children: [
      {
        path: 'tipo-de-plato',
        component: TypeOfPlateComponent,
      },
      {
        path: 'enfermedades',
        component: TypeOfPlateComponent,
      },
      {
        path: 'alergias',
        component: TypeOfPlateComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'menu/tipo-de-plato',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}