import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({ providedIn: 'root' })
export class FirebaseStorageService {
  constructor(private fireStorage: AngularFireStorage) {}

  async getImage(path: string): Promise<string> {
    try {
      let url = '';
      const modifiedPath = path.toLowerCase().replace(' ', '_');
      const task = await this.fireStorage
        .ref(modifiedPath);

      url = await task.getDownloadURL().toPromise();
      return Promise.resolve(url);
    } catch (e) {
      throw e;
    }
  }
}
