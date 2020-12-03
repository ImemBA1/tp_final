import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule';
import { User } from '../formulaire/user';
import { VehiculeService } from './vehicule.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  listeVehicule: Vehicule[];
  // , private service2: ReactiveService
  constructor(private service: VehiculeService) { }

  ngOnInit(): void {
    this.getAllVehicule();
    // this.getAllUsers();
  }
  listUsers: User[];
  getAllVehicule(): void {
    this.service.getAll().subscribe(data => this.listeVehicule = data)
  }
  // getAllUsers(): void {
  //   this.service2.getAll().subscribe(data => {
  //     this.listUsers = data;
  //     console.log(this.listUsers);
  //   })
  // }

}
