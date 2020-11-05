import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Plate } from 'src/app/core/models/plate.model';
import { MenuService } from 'src/app/core/services/menu.service';
import { PlateService } from 'src/app/core/services/plate.service';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.scss'],
})
export class PlateComponent implements OnInit {
  plates: Plate[] = [];

  constructor(
    private PlateService: PlateService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.loadPlates();
  }

  async loadPlates() {
    this.plates = await this.PlateService.getPlates();
  }

  onClickPlateSelection(plate: Plate) {
    this.notification.create(
      'success',
      'Notificación',
      'Se ha agregado un plato de ' + plate.nombre
    );
  }
}
