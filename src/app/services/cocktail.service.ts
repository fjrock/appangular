import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }
 
public getRandom(){
  return this.http.get<any>(`${environment.API_COCKTAIL}/random.php?`);
}

public findDetailCocktail(id: any){
  return this.http.get<any>(`${environment.API_COCKTAIL}/lookup.php?i=${id}`);
}

public findByLetter(letter: any) {
  return this.http.get<any>(`${environment.API_COCKTAIL}/search.php?f=${letter}`);
}

}
