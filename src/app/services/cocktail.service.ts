import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment'
import {Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

constructor(private http: HttpClient) { }
 
public getRandom():Observable<any>{
  return this.http.get<any>(`${environment.API_COCKTAIL}/random.php?`);
}

public findDetailCocktail(id: any): Observable<any>{
  return this.http.get<any>(`${environment.API_COCKTAIL}/lookup.php?i=${id}`);
}

public findByLetter(letter: any): Observable<any> {
  return this.http.get<any>(`${environment.API_COCKTAIL}/search.php?f=${letter}`);
}

}
