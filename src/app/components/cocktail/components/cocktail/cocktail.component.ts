import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { take } from 'rxjs/operators';
import { CocktailService } from '../../../../services/cocktail.service'
import { Drink } from '../../../../models/Drink'
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  cocktail: Drink
  cocktailLetter: Drink
  searchLetter = null;
  letter$ = new Subject<String>();
  subscriptionSearchData: Subscription;
  componentDestroyed: Subject<boolean> = new Subject();
  

  constructor(private router: Router,
              private cocktailService: CocktailService) { 
  
              }

  ngOnInit() {
    this.cocktailService.getRandom().pipe(take(1)).subscribe(
      (data) => { 
        this.cocktail =data.drinks[0];
      },
      (error) => {
        console.error(error);
      }
    );

  }

  getCocktailById(id: any) {
    this.router.navigate([`detalle/${id}`]);
  }

  getCocktailByLetter(){
    this.router.navigate([`detalle-letra/${this.searchLetter}`]);
  }

  getCocktailByLetterCocktail(){
    
    if(this.searchLetter!=''){

    this.cocktailService.findByLetter(this.searchLetter).pipe(take(1)).subscribe(
      data=>{
        this.cocktailLetter = data.drinks;
      }
      );
    }

  }
  

}
