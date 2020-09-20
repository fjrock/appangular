import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }
 


public findArtistByName(id: any){
  return this.http.get<any>(`${environment.API_MUSIC}search.php?s=${name}`);
}



}