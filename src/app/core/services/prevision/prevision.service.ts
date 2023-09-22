import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prevision } from '../../interfaces/prevision';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PrevisionService {
  apiUrl = environment.apiBaseUrl +'/api/v1/previsions'
  constructor(private http : HttpClient) { }
  addPrevision(prevision : Prevision) : Observable<Prevision>{
    return this.http.post<Prevision>(`${this.apiUrl}`, prevision)
  }
  getAllPrevision(): Observable<Prevision>{
    return this.http.get<Prevision>(``)
  }
  countPrevision() :Observable<number>{
    return this.http.get<number>(``)
  }
  updatePrevision(prevision : Prevision): Observable<any>{
    return this.http.put<any>(``, prevision)
  }
  deletePrevision(){}
}
