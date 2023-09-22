import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  apiUrl = ''
  constructor(htpp : HttpClient) { }
  addUtilisateur(){}
  getAllUtilisateur(){}
  countUtilisateur(){}
  updateUtilisateur(){}
  deleteUtilisateur(){
    
  }
}
 