import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Structure } from '../../interfaces/structure';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StructureService {
  apiUrl = ''
  constructor(private http : HttpClient) { }
  addStructure(structure : Structure) : Observable<Structure>{
    return this.http.post<Structure>(`${this.apiUrl}`, structure)
  }
  getAllStructure() :Observable<Structure>{
    return this.http.get<Structure>(``)
  }
  getStructureByLibelleCourt() : Observable<Structure>{
    return this.http.get<Structure>(`${this.apiUrl}`)
  }
  getRegionByStructure(){}
  countStructure()  :Observable<number>{
    return this.http.get<number>(``)
  }
  updateStructure(structure : Structure) : Observable<Structure>{
    return this.http.put<Structure>(``, structure)
  }
  deleteStructure() : Observable<Structure>{
    return this.http.delete<Structure>(``)
  }
}
