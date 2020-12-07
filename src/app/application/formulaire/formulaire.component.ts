import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  user: User = {
    name: '',
    emailOffers: true,
    interfaceStyle: '',
    subscriptionType: '',
    notes: '',
    password: ''
  };

  autreUser : User = {...this.user};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(field: NgForm){
    console.log('data received:', field.valid)
    console.log(field.value);
    //insertion dans la bd
  }

}
