import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicule } from 'src/app/models/vehicule';
import { VehiculeService } from '../crud/vehicule.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  id: number;
  taxi: Vehicule;
  affichageVehiculeForm: FormGroup;
  constructor(private service: VehiculeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(resultat => {
      this.taxi = resultat;
    });
    this.affichageVehiculeForm = new FormGroup({
      numeroTaxi: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required),
      classe: new FormControl('', Validators.required),
      nbPersonne: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
    });
  }
  public get controleData() {
    return this.affichageVehiculeForm.controls;
  }
  public afficherVehicule() {
    this.service.put(this.id, this.affichageVehiculeForm.value).subscribe(() => {
      this.router.navigateByUrl('crud');
    }, (err) => {
      console.log(err);
    });
  }
}
