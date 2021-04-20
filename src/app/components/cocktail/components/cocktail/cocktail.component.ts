import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { map, tap } from 'rxjs/operators';
import { CocktailService } from '../../../../services/cocktail.service'
import { Drink } from '../../../../models/drink'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit{

  cocktail: any;
  cocktailLetter: Drink
  searchLetter = null;
  random: String
  asyncDrink$: Observable<Drink>;
  asyncRandom$: Observable<any>;

  constructor(private router: Router,
              private cocktailService: CocktailService) { }

  ngOnInit() {

    this.asyncDrink$ = this.cocktailService.getRandom().pipe(
      tap(response => {
        this.cocktail = response.drinks[0]
      }),
      map (response => response.drinks[0])
    );

    this.random = String.fromCharCode(65+Math.floor(Math.random() * 26))
    this.getCocktailByLetterCocktailInit(this.random);

  }

  getCocktailById(id: any) {
  
    this.router.navigate([`detalle/${id}`]);

  }

  getCocktailByLetterCocktail(){
    
    if(this.searchLetter!=''){
      this.asyncRandom$ = this.cocktailService.findByLetter(this.searchLetter).pipe(tap(response => {
        this.cocktailLetter = response.drinks
      }),
      map (response => response.drinks)
     );
    }

  }
  
  getCocktailByLetterCocktailInit(random: String){
    
    this.asyncRandom$ = this.cocktailService.findByLetter(random).pipe(tap(response => {
      this.cocktailLetter = response.drinks
    }),
    map (response => response.drinks)
   ); 
  }

}
