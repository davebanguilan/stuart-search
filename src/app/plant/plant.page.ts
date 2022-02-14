import { Component, OnInit } from '@angular/core';
import { Plant } from '../_shared/models';
import { PlantService } from '../_shared/services';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.page.html',
  styleUrls: ['./plant.page.scss'],
})
export class PlantPage implements OnInit {

  plantDetails: Plant;

  constructor(
    private plantService: PlantService
  ) { }

  ngOnInit() {
    this.plantDetails = this.plantService.getSelectedPlantDetails();
  }

}
