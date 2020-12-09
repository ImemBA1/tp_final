import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './application/contact/contact.component';
import { CrudComponent } from './application/crud/crud.component';
import { ErrornotfoundComponent } from './application/errornotfound/errornotfound.component';
import { FooterComponent } from './application/footer/footer.component';
import { FunComponent } from './application/fun/fun.component';
import { HomeComponent } from './application/home/home.component';
import { NavbarComponent } from './application/navbar/navbar.component';
import { TutorielComponent } from './application/tutoriel/tutoriel.component';
import { ReactiveComponent } from './application/reactive/reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CrudComponent,
    ErrornotfoundComponent,
    FooterComponent,
    FunComponent,
    HomeComponent,
    NavbarComponent,
    TutorielComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
