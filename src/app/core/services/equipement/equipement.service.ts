import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipement } from '../../interfaces/equipement';
import {Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  apiUrl=''
  constructor(private http : HttpClient) { }
  addEquipement(equipement : Equipement) : Observable<Equipement>{
    return this.http.post<Equipement>(``, equipement)
  }
  getAllEquipement() : Observable<Equipement>{
    return this.http.get<Equipement>(``)
  }
  getTotalEquipement():Observable<Equipement>{
    return this.http.get<Equipement>(`${this.apiUrl}/total`)
  }
  updateEquipement(equipement: Equipement):Observable<any>{
    return this.http.put<any>(``, equipement)
  }
  deleteEquipement():Observable<Equipement>{
    return this.http.delete<Equipement>(``)
  }
}
