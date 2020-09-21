import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { take } from 'rxjs/operators';
import { CocktailService } from '../../../../services/cocktail.service'
import { Drink } from '../../../../models/Drink'
import {Subject, Subscription} from 'rxjs';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  cocktail: Drink
  cocktailLetter: Drink
  searchLetter = null;
  pageSize: number;
  page: number;

  constructor(private router: Router,
              private cocktailService: CocktailService) { 

  this.page = 1;
  this.pageSize = 8;
  
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
