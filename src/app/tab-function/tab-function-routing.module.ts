import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabFunctionPage } from './tab-function.page';

const routes: Routes = [
  {
    path: '',
    component: TabFunctionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabFunctionPageRoutingModule {}
