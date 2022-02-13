import { Injectable } from '@angular/core';
import { PHARMACOLOGICAL_ACTIVITY } from '../constants';

@Injectable({ providedIn: 'root' })
export class PaListService {

  paList = PHARMACOLOGICAL_ACTIVITY;

  constructor(
  ) {}

}
