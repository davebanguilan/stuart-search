import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTEURL } from '../_shared/constants';
import { Data } from '../_shared/models';
import { PaListService, PlantService } from '../_shared/services';

@Component({
  selector: 'app-tab-function',
  templateUrl: 'tab-function.page.html',
  styleUrls: ['tab-function.page.scss']
})
export class TabFunctionPage {
  choices: Data[];
  selectedValue = '';
  showErrorMessage = false;
  errorMessage: string;
  searchValue: string;

  constructor(
    private paListService: PaListService,
    private plantService: PlantService,
    private router: Router
  ) {}

  ionViewWillEnter(): void {
    this.choices = this.paListService.paList;
  }

  activitySelected($event: any): void {
    if(!!$event.target.value) {
      this.paListService.setPaTitle($event.target.value);
      this.paListService.setPaSelected($event.target.value);
      this.router.navigateByUrl(ROUTEURL.paList);
      this.selectedValue = null;
    }
  }

  search(): void {
    if(!!this.searchValue) {
      this.plantService.setSelectedPlant(this.searchValue.toUpperCase());
      this.router.navigateByUrl(ROUTEURL.plant);
    } else {
      this.errorMessage = 'Please provide the common name of the plant.';
      this.showErrorMessage = true;
    }
    this.searchValue = null;
  }

  inputInFocus(): void {
    if(this.showErrorMessage) {
      this.errorMessage = '';
      this.showErrorMessage = false;
    }
  }

}
