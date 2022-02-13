import { NgModule } from '@angular/core';
import { TabMainPage } from './tab-main.page';

import { TabMainPageRoutingModule } from './tab-main-routing.module';
import { SharedModule } from '../_shared';

@NgModule({
  imports: [
    SharedModule,
    TabMainPageRoutingModule
  ],
  declarations: [TabMainPage]
})
export class TabMainPageModule {}
