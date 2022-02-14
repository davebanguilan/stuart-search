import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PATHURL, ROUTEURL } from '../../constants';
import { PlantService } from '../../services';

@Component({
  selector: 'app-pa-list',
  templateUrl: './pa-list.component.html',
  styleUrls: ['./pa-list.component.scss'],
})
export class PaListComponent implements OnInit {

  @Input() pharmacologicalActivity: string[];
  @Input() title: string;
  @Output() showFunctionPage = new EventEmitter<void>();

  constructor(
    private plantService: PlantService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  viewPlantDetails(plant: string): void {
    this.plantService.setSelectedPlant(plant);
    this.router.navigateByUrl(PATHURL.plant);
  }

  backToFunctionPage(): void {
    this.showFunctionPage.emit();
  }

}
