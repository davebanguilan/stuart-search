import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PATHURL, ROUTEURL } from '../_shared/constants';
import { PaListService, PlantService } from '../_shared/services';

@Component({
  selector: 'app-pa-list',
  templateUrl: './pa-list.page.html',
  styleUrls: ['./pa-list.page.scss'],
})
export class PaListPage {

  pharmacologicalActivity: string[];
  title: string;

  constructor(
    private plantService: PlantService,
    private router: Router,
    private paListService: PaListService
  ) { }

  ionViewWillEnter(): void {
    this.title = this.paListService.getPaTitle();
    this.pharmacologicalActivity = this.paListService.getPaSelected();
  }

  viewPlantDetails(plant: string): void {
    this.plantService.setSelectedPlant(plant);
    this.router.navigateByUrl(PATHURL.plant);
  }

}
