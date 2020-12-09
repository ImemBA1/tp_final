import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicule } from 'src/app/models/vehicule';
import { VehiculeService } from '../crud/vehicule.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number;
  taxi: Vehicule;
  updateVehiculeForm: FormGroup;
  constructor(private service: VehiculeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(resultat => {
      this.taxi = resultat;
    });
    this.updateVehiculeForm = new FormGroup({
      numeroTaxi: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required),
      classe: new FormControl('', Validators.required),
      nbPersonne: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
    });
  }
  public get controleData() {
    return this.updateVehiculeForm.controls;
  }
  public updateVehicule() {
    this.service.put(this.id, this.updateVehiculeForm.value).subscribe(() => {
      this.router.navigateByUrl('crud');
    }, (err) => {
      console.log(err);
    });
  }
}
