import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../../interfaces/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  apiUrl = ''
  constructor(private http : HttpClient) { }
  addRegion(region : Region):Observable<Region>{
    return this.http.post<Region>(``, region)
  }
  getAllRegion() : Observable<Region>{
    return this.http.get<Region>(``)
  }
  updateRegion(region:Region) :Observable<Region>{
    return this.http.put<Region>(``, region)
  }
  deleteRegion() : Observable<Region>{
    return this.http.delete<Region>(``)
  }
}
