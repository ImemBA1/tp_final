import { Injectable } from '@angular/core';
import { GenericServices } from '../../services/generic-services.service';
import { Vehicule } from '../../models/vehicule';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService extends GenericServices<Vehicule, number>{

  constructor(http: HttpClient) {
    super(http, "http://localhost:7000/monapi");
  }
}
