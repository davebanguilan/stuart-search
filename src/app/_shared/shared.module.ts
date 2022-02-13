import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaListComponent } from './components';

export const components = [
  PaListComponent
];

export const directives = [
];

export const importModules = [
  CommonModule,
  FormsModule,
  IonicModule,
];

export const exportModules = [
  CommonModule,
  FormsModule,
  IonicModule
];

@NgModule({
  declarations: [
    ...components,
    ...directives
  ],
  entryComponents: [],
  imports: [
    ...importModules
  ],
  providers: [],
  exports: [
    ...components,
    ...directives,
    ...exportModules
  ]
})
export class SharedModule { }
