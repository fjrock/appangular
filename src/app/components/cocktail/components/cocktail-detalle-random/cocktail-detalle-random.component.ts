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

      if(concatenar[0].strIngredient1!=null && concatenar[0].strIngredient1.trim()!=""){
        this.ingredients=this.ingredients+concatenar[0].strIngredient1+`(${concatenar[0].strMeasure1})`;
      }
      if(concatenar[0].strIngredient2!=null && concatenar[0].strIngredient2.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient2+`(${concatenar[0].strMeasure2})`;
      }
      if(concatenar[0].strIngredient3!=null && concatenar[0].strIngredient3.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient3+`(${concatenar[0].strMeasure3})`;
      }
      if(concatenar[0].strIngredient4!=null && concatenar[0].strIngredient4.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient4+`(${concatenar[0].strMeasure4})`;
      }
      if(concatenar[0].strIngredient5!=null && concatenar[0].strIngredient5.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient5+`(${concatenar[0].strMeasure5})`;
      }
      if(concatenar[0].strIngredient6!=null && concatenar[0].strIngredient6.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient6+`(${concatenar[0].strMeasure6})`;
      }
      if(concatenar[0].strIngredient7!=null && concatenar[0].strIngredient7.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient7+`(${concatenar[0].strMeasure7})`;
      }
      if(concatenar[0].strIngredient8!=null && concatenar[0].strIngredient8.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient8+`(${concatenar[0].strMeasure8})`;
      }
      if(concatenar[0].strIngredient9!=null && concatenar[0].strIngredient9.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient9+`(${concatenar[0].strMeasure9})`;
      }
      if(concatenar[0].strIngredient10!=null && concatenar[0].strIngredient10.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient10+`(${concatenar[0].strMeasure10})`;
      }
      if(concatenar[0].strIngredient11!=null && concatenar[0].strIngredient11.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient11+`(${concatenar[0].strMeasure11})`;
      }
      if(concatenar[0].strIngredient12!=null && concatenar[0].strIngredient12.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient12+`(${concatenar[0].strMeasure12})`;
      }
      if(concatenar[0].strIngredient13!=null && concatenar[0].strIngredient13.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient13+`(${concatenar[0].strMeasure13})`;
      }
      if(concatenar[0].strIngredient14!=null && concatenar[0].strIngredient14.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient14+`(${concatenar[0].strMeasure14})`;
      }
      if(concatenar.strIngredient15!=null && concatenar[0].strIngredient15.trim()!=""){
        this.ingredients=this.ingredients+', '+concatenar[0].strIngredient15+`(${concatenar[0].strMeasure15})`;
      }
        return this.ingredients;
      }

}
