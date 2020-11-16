import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  stepperSubscription: Subscription;
  step;

  constructor(
    private menuService: MenuService,
    private notification: NzNotificationService
  ) {
    this.stepperSubscription = this.menuService.stepper.subscribe((step) => {
      this.step = step;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.stepperSubscription.unsubscribe();
  }

  onIndexChange(index) {
    switch (index) {
      case 3:
        if (this.menuService.allergies.value.length == 0) {
          this.notification.create(
            'warning',
            'Notificación',
            'Tienes que seleccionar al menos una alergía'
          );
          return;
        }
      case 2:
        if (this.menuService.diseases.value.length == 0) {
          this.notification.create(
            'warning',
            'Notificación',
            'Tienes que seleccionar al menos una enfermedad'
          );
          return;
        }
      case 1:
        if (this.menuService.typeOfDiseases.value == '') {
          this.notification.create(
            'warning',
            'Notificación',
            'Tienes que seleccionar un tipo de enfermedad'
          );
          return;
        }
      default:
        break;
    }
    this.menuService.stepper.next(index);
  }
}
