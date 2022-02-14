import { NgModule } from '@angular/core';
import { PlantPageRoutingModule } from './plant-routing.module';
import { PlantPage } from './plant.page';
import { SharedModule } from '../_shared';

@NgModule({
  imports: [
    SharedModule,
    PlantPageRoutingModule
  ],
  declarations: [PlantPage]
})
export class PlantPageModule {}
