import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { MAP_PA } from '../_shared/constants';
import { PaListService } from '../_shared/services';

@Component({
  selector: 'app-tab-function',
  templateUrl: 'tab-function.page.html',
  styleUrls: ['tab-function.page.scss']
})
export class TabFunctionPage {

  showPAList: boolean;
  choices: Data[];
  paSelected: string[];
  paListTitle: string;

  constructor(
    private paListService: PaListService
  ) {}

  ionViewWillEnter(): void {
    this.showPAList = false;
    this.choices = this.paListService.paList;
    this.paSelected = [];
    this.paListTitle = '';
  }


  activitySelected($event: any): void {
    this.paSelected = MAP_PA[$event.target.value];
    this.paListTitle = $event.target.value;
    this.showPAList = true;
  }

  showFunctionPage(): void {
    this.showPAList = false;
  }

}
