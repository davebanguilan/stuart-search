import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pa-list',
  templateUrl: './pa-list.component.html',
  styleUrls: ['./pa-list.component.scss'],
})
export class PaListComponent implements OnInit {

  @Input() pharmacologicalActivity: string[];
  @Input() title: string;
  @Output() showFunctionPage = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  viewPlantDetails(plant: string): void {
    //redirect to plant-view-details
  }

  backToFunctionPage(): void {
    this.showFunctionPage.emit();
  }

}
