import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor(private http: HttpClient) { }

  public findByLetter(letter: any) {
    return this.http.get<any>(`${environment.API_BAR}/search.php?f=${letter}`);
  }
 
}
