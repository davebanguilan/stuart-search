import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, Query, QueryDocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { COLLECTION } from '../constants';
import { Plant } from '../models';

@Injectable({ providedIn: 'root' })
export class PlantService {

  private selectedPlant: string;

  constructor(
    private firestore: AngularFirestore
  ) {}

  setSelectedPlant(selectedPlant: string): void {
    this.selectedPlant = selectedPlant;
  }

  getSelectedPlant(): string {
    return this.selectedPlant;
  }

  async getSelectedPlantDetails(): Promise<Plant> {
    const plantsCollectionRef:  AngularFirestoreCollection<Plant> =
      this.firestore.collection<Plant>(`${COLLECTION.plants}`);
    const query: Query<Plant> = plantsCollectionRef.ref.where('commonName', '==', this.selectedPlant);
    const plantsCol: QuerySnapshot<Plant> = await query.get();
    if (!plantsCol.empty) {
      return plantsCol.docs[0].data();
    } else {
      return null;
    }
  }

}


