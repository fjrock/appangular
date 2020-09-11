import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MonedasService {

  constructor(private http: HttpClient) { }

  public getMonedas(): Observable<any> {
    return this.http.get(environment.API_MONEDAS);
  }

  public getMonedasById(id: any): Observable<any> {
    return this.http.get(`${environment.API_MONEDAS}/${id}`);

    
  }
}
