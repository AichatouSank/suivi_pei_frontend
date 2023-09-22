import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { AddUtilisateurComponent } from './components/add-utilisateur/add-utilisateur.component';


@NgModule({
  declarations: [
    UtilisateurComponent,
    AddUtilisateurComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
