import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'plant',
    loadChildren: () => import('./plant/plant.module').then( m => m.PlantPageModule)
  },
  {
    path: 'pa-list',
    loadChildren: () => import('./pa-list/pa-list.module').then( m => m.PaListPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
