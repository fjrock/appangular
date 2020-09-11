import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TiempoService {

  constructor(private http: HttpClient) { }

  public getTiempo(): Observable<any> {
    return this.http.get(environment.API_TIEMPO);
  }
}
