import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabMainPage } from './tab-main.page';

import { TabMainPageRoutingModule } from './tab-main-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabMainPageRoutingModule
  ],
  declarations: [TabMainPage]
})
export class TabMainPageModule {}
