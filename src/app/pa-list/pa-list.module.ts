import { NgModule } from '@angular/core';
import { PaListPageRoutingModule } from './pa-list-routing.module';
import { PaListPage } from './pa-list.page';
import { SharedModule } from '../_shared';

@NgModule({
  imports: [
    SharedModule,
    PaListPageRoutingModule
  ],
  declarations: [PaListPage]
})
export class PaListPageModule {}
