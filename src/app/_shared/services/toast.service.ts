import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(public toastController: ToastController) {}

  async showSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'success',
    });

    toast.present();
  }

  async showErrorToast(
    message: string,
    position?: 'top' | 'bottom' | 'middle'
  ) {
    const toast = await this.toastController.create({
      message,
      duration: 2500,
      color: 'danger',
      position,
    });

    toast.present();
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1000,
      color: 'success',
    });

    toast.present();
  }
}
