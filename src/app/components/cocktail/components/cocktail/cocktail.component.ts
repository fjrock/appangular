import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { take } from 'rxjs/operators';
import { CocktailService } from '../../../../services/cocktail.service'
import { Drink } from '../../../../models/drink'

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  cocktail: Drink
  searchLetter = null;

  constructor(private router: Router,
              private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.getRandom().pipe(take(1)).subscribe(
      (data) => { 
        this.cocktail =data.drinks[0];
        console.log(this.cocktail);
      },
      (error) => {
        console.error(error);
      }
    );

  }

  getCocktailById(id: any) {
    console.log(id)
    this.router.navigate([`detalle/${id}`]);
  }

  getCocktailByLetter(id: any){
    console.log(this.searchLetter);
    this.router.navigate([`detalle-letra/${this.searchLetter}`]);
  }

  

}
