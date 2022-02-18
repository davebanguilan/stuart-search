import { Component } from '@angular/core';
import { Data, Router } from '@angular/router';
import { ROUTEURL } from '../_shared/constants';
import { PaListService } from '../_shared/services';

@Component({
  selector: 'app-tab-function',
  templateUrl: 'tab-function.page.html',
  styleUrls: ['tab-function.page.scss']
})
export class TabFunctionPage {
  choices: Data[];

  constructor(
    private paListService: PaListService,
    private router: Router
  ) {}

  ionViewWillEnter(): void {
    this.choices = [];
    this.choices = this.paListService.paList;
  }

  activitySelected($event: any): void {
    this.paListService.setPaTitle($event.target.value);
    this.paListService.setPaSelected($event.target.value);
    this.router.navigateByUrl(ROUTEURL.paList);
  }

}
