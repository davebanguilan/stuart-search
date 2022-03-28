import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabAboutPage } from './tab-about.page';

const routes: Routes = [
  {
    path: '',
    component: TabAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAboutPageRoutingModule {}
