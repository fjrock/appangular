import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { map, take, tap } from 'rxjs/operators';
import { CocktailService } from '../../../../services/cocktail.service'
import { Drink } from '../../../../models/Drink'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  cocktail: any;
  cocktailLetter: Drink
  searchLetter = null;
  random: String
  asyncDrink$: Observable<Drink>;


  constructor(private router: Router,
              private cocktailService: CocktailService) { 

  
              }

  ngOnInit() {

    /*this.asyncDrink = this.cocktailService.getRandom().pipe(take(1)).subscribe(
      (data) => { 
        this.cocktail =data.drinks[0];
      },
      (error) => {
        console.error(error);
      }
    );*/

    this.asyncDrink$ = this.cocktailService.getRandom().pipe(
      tap(response => {
        //this.totalRecords = response.info.count;
        //this.loading = false;
        this.cocktail = response.drinks[0]
        //console.log(this.cocktail)
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
    
    console.log(this.random)
    if(this.searchLetter!=''){

    this.cocktailService.findByLetter(this.searchLetter).pipe(take(1)).subscribe(
      data=>{
        this.cocktailLetter = data.drinks;
      }
      );
    }

  }
  
  getCocktailByLetterCocktailInit(random: String){
    
    console.log(this.random)
  

    this.cocktailService.findByLetter(this.random).pipe(take(1)).subscribe(
      data=>{
        this.cocktailLetter = data.drinks;
      }
      );
    

  }

}
