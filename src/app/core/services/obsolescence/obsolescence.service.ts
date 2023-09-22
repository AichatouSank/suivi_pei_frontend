import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Obsolescence } from '../../interfaces/obsolescence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsolescenceService {

  constructor(private http : HttpClient) { }
  addObsolescence(obsolescence : Obsolescence):Observable<Obsolescence>{
    return this.http.post<Obsolescence>(``, obsolescence)
  }
  updateObsolescence(obsolescence : Obsolescence) :Observable<any>{
    return this.http.put<any>(``, obsolescence)
  }
}
