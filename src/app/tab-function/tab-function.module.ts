import { NgModule } from '@angular/core';
import { TabFunctionPage } from './tab-function.page';

import { TabFunctionPageRoutingModule } from './tab-function-routing.module';
import { SharedModule } from '../_shared';

@NgModule({
  imports: [
    SharedModule,
    TabFunctionPageRoutingModule
  ],
  declarations: [TabFunctionPage]
})
export class TabFunctionPageModule {}
