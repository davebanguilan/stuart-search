import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTEURL, TOAST_MESSAGE } from '../_shared/constants';
import { Plant } from '../_shared/models';
import { FirebaseStorageService, PlantService, ToastService } from '../_shared/services';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.page.html',
  styleUrls: ['./plant.page.scss'],
})
export class PlantPage implements OnInit {

  plantDetails: Plant;
  showPage = false;
  imageLoading: boolean;
  plantImage: string;

  constructor(
    private plantService: PlantService,
    private firebaseStorageService: FirebaseStorageService,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.showPage = false;
    this.plantService.getSelectedPlantDetails().then((data) => {
      if(!!data) {
        this.plantDetails = data;
        this.imageLoading = true;
        this.firebaseStorageService.getImage(`images/${this.plantDetails.commonName}.png`).then((url) => {
          this.plantImage = url;
        }).finally(() => {
          this.imageLoading = false;
        });
      } else {
        this.toastService.showErrorToast(TOAST_MESSAGE.plantNotFound);
        this.router.navigateByUrl(ROUTEURL.function);
      }
    }).finally(() => {
      this.showPage = true;
    });
  }

}
