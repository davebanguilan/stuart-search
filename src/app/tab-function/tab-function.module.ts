import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabFunctionPage } from './tab-function.page';

import { TabFunctionPageRoutingModule } from './tab-function-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabFunctionPageRoutingModule
  ],
  declarations: [TabFunctionPage]
})
export class TabFunctionPageModule {}
