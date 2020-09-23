import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef} from '@angular/core';
import { Router } from "@angular/router";
import { take } from 'rxjs/operators';
import { CocktailService } from '../../../../services/cocktail.service'
import { Drink } from '../../../../models/Drink'
import {Subject, Subscription,Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  cocktail: Drink;
  cocktailLetter: Drink
  searchLetter = null;
  random: String


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
