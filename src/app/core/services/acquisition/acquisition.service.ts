import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acquisition } from '../../interfaces/acquisition'
import { ModeAcquisition } from '../../enum/modeAcquisition';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AcquisitionService {

  constructor(private http:HttpClient) { }
  apiUrl =environment.apiBaseUrl + '/api/v1/acquisitions'
  addAcquisition(acquisition : Acquisition) : Observable<Acquisition>{
    return this.http.post<Acquisition>(``, acquisition)
  }
  getAllPrevision():Observable<Acquisition[]>{
    return this.http.get<Acquisition[]>(``)
  }
  getAcquisitionByMode(mode :ModeAcquisition) : Observable<Acquisition>{
    return this.http.get<Acquisition>(`${this.apiUrl}, ${mode}/mode`)
  }
  getByDate(date : Date) : Observable<Acquisition>{
    return this.http.get<Acquisition>(``)
  }
  getByDateMode(date : Date, mode: ModeAcquisition) : Observable<Acquisition>{
    return this.http.get<Acquisition>(`${this.apiUrl}, ${date}  ${mode}`, )
  }
  countAllAcquisition() : Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/count-all`)
  }
  countCoutTtotaux() : Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/cout-total`)
  }
  updateAcquisition(acquisition:Acquisition) : Observable<any>{
    return this.http.post(``, acquisition)
  }
  deleteAcquisition(id:number):Observable<any>{
    return this.http.delete(``)
  }
  /* addAcquisition(acquisition : Acquisition):Observable<Acquisition>{
    return this.http.post<Acquisition>(`${this.apiUrl}`, acquisition) */
  
}
