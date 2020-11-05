import { Component, OnInit } from '@angular/core';
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

  constructor(private PlateService: PlateService) {}

  ngOnInit(): void {
    this.loadPlates();
  }

  async loadPlates() {
    this.plates = await this.PlateService.getPlates();
  }
}
