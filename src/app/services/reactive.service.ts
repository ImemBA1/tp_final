import { Injectable } from '@angular/core';
import { GenericServices } from './generic-services.service';
import { Vehicule } from '../models/vehicule';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService extends GenericServices<Vehicule, number>{

  constructor(http: HttpClient) {
    super(http, "http://localhost:7000/monapi")
  }

}
