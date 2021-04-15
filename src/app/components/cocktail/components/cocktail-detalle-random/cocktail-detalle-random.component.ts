import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../../../services/cocktail.service'
import { map, tap } from 'rxjs/operators';
import { Drink } from '../../../../models/drink';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cocktail-detalle',
  templateUrl: './cocktail-detalle-random.component.html',
  styleUrls: ['./cocktail-detalle-random.component.scss']
})
export class CocktailDetalleRandomComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              private cocktailService: CocktailService) { }

  cocktail: Drink
  ingredients: String
  asyncDrink$: Observable<Drink>;

  ngOnInit() {
    
    let id: string = this.route.snapshot.paramMap.get("id");
    this.getCocktailById(id);

  }

    getCocktailById(id: any){

    this.asyncDrink$ = this.cocktailService.findDetailCocktail(id).pipe(
      tap(response => {
        this.cocktail = response.drinks
        this.concatenar(this.cocktail)
      }),
      map (response => response.drinks)
    );

    }

    concatenar(concatenar:any){

      this.ingredients='';

      if(concatenar[0].strIngredient1!=null  ){
        this.ingredients=this.ingredients+concatenar[0].strIngredient1;
      }
      if(concatenar[0].strIngredient2!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient2;
      }
      if(concatenar[0].strIngredient3!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient3;
      }
      if(concatenar[0].strIngredient4!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient4;
      }
      if(concatenar[0].strIngredient5!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient5;
      }
      if(concatenar[0].strIngredient6!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient6;
      }
      if(concatenar[0].strIngredient7!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient7;
      }
      if(concatenar[0].strIngredient8!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient8;
      }
      if(concatenar[0].strIngredient9!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient9;
      }
      if(concatenar[0].strIngredient10!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient10;
      }
      if(concatenar[0].strIngredient11!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient11;
      }
      if(concatenar[0].strIngredient12!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient12;
      }
      if(concatenar[0].strIngredient13!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient13;
      }
      if(concatenar[0].strIngredient14!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient14;
      }
      if(concatenar.strIngredient15!=null){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient15;
      }
        return this.ingredients;
      }

}
