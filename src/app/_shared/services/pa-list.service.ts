import { Injectable } from '@angular/core';
import { MAP_PA, PA_TITLE, PHARMACOLOGICAL_ACTIVITY } from '../constants';

@Injectable({ providedIn: 'root' })
export class PaListService {

  paList = PHARMACOLOGICAL_ACTIVITY;

  private paTitle: string;
  private paSelected: string[];

  constructor(
  ) {}

  setPaTitle(title: string): void {
    this.paTitle = PA_TITLE[title];
  }

  getPaTitle(): string {
    return this.paTitle;
  }

  setPaSelected(selected: string): void {
    this.paSelected = MAP_PA[selected];
  }

  getPaSelected(): string[] {
    return this.paSelected;
  }

}
