import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './application/contact/contact.component';
import { CrudComponent } from './application/crud/crud.component';
import { ErrornotfoundComponent } from './application/errornotfound/errornotfound.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { FunComponent } from './application/fun/fun.component';
import { HomeComponent } from './application/home/home.component';
import { ReactiveComponent } from './application/reactive/reactive.component';
import { TutorielComponent } from './application/tutoriel/tutoriel.component';



const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'formulaire', component: ReactiveComponent },
  { path: 'fun', component: FunComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'tutoriel',
    children: [
      { path: ':id', component: TutorielComponent }
    ]
  },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrornotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
