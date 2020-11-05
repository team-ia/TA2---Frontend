import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService, Step } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  stepperSubscription: Subscription;
  step;

  constructor(private menuService: MenuService) {
    this.stepperSubscription = this.menuService.stepper.subscribe((step) => {
      this.step = step;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.stepperSubscription.unsubscribe();
  }

  onIndexChange(index) {
    this.menuService.stepper.next(index);
  }
}
