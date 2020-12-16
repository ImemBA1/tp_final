import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicule } from 'src/app/models/vehicule';
import { ReactiveService } from '../../services/reactive.service'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  vehiculeForm = new FormGroup({

    // ziad zaml pattern
    numeroTaxi: new FormControl('', Validators.required),
    prix: new FormControl('', Validators.required),
    classe: new FormControl('', Validators.required),
    nbPersonne: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
  });

  vehicule: Vehicule;
  validMessage: string = "";

  constructor(private service: ReactiveService, private router: Router) {

  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.vehiculeForm.valid) {
      this.service.post(this.vehiculeForm.value).subscribe(data => {
        this.vehiculeForm.reset();
        this.router.navigateByUrl('/crud');
      }, (err) => {
        console.log(err);
      });
    } else {
      this.validMessage = "Remplissez tous les champs correctement avant d'envoyer !";
    }
  }
}
