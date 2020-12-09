import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule';
import { ReactiveService } from 'src/app/services/reactive.service';
import { VehiculeService } from './vehicule.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  listeVehicule: Vehicule[];
  public headElements = ['ID', 'Numero Taxi', 'Prix', 'Classe', 'Personnes', 'Destination', 'Operations'];
  constructor(private service: VehiculeService, private service2: ReactiveService) { }

  ngOnInit(): void {
    this.getAllVehicule();
  }
  getAllVehicule(): void {
    this.service.getAll().subscribe(data => {
      this.listeVehicule = data;
      console.log(this.listeVehicule);
    })
  }

  public delete(id: number, i: any) {
    if (window.confirm("Êtes-vous sûr d'annuler cette réservation")) {
      this.service.deleteById(id).subscribe(resultat => {
        this.listeVehicule.splice(i, 1);
      });
    }

  }
}
