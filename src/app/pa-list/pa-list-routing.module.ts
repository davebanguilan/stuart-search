import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaListPage } from './pa-list.page';

const routes: Routes = [
  {
    path: '',
    component: PaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaListPageRoutingModule {}
