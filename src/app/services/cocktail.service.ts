import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment'
import { BehaviorSubject } from 'rxjs';
import {Subject, Subscription,Observable } from 'rxjs';
import { Drink } from '../models/Drink';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

//searchData = new BehaviorSubject<string>('');
//observableSearchData$ = this.searchData.asObservable();

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

/*nextData(data: any) {
  console.log(data)
  this.searchData.next(data);
}*/


}
