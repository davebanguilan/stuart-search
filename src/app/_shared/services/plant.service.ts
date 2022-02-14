import { Injectable } from '@angular/core';
import { Plant } from '../models';

@Injectable({ providedIn: 'root' })
export class PlantService {

  private selectedPlant: string;

  constructor(
  ) {}

  setSelectedPlant(selectedPlant: string): void {
	this.selectedPlant = selectedPlant;
  }

  getSelectedPlantDetails(): Plant {
    return {
      commonName: this.selectedPlant,
	};
  }

}


