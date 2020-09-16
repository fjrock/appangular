import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../../../services/cocktail.service'
import { take } from 'rxjs/operators';
import { Drink } from '../../../../models/Drink'

@Component({
  selector: 'app-cocktail-detalle',
  templateUrl: './cocktail-detalle-random.component.html',
  styleUrls: ['./cocktail-detalle-random.component.scss']
})
export class CocktailDetalleRandomComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private cocktailService: CocktailService) { }

  cocktail: Drink
  ingredients: String

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get("id");
    this.getCocktailById(id);
  }

  public getCocktailById(id: any){
    this.cocktailService.findDetailCocktail(id).pipe(take(1)).subscribe(
      data=>{
        this.cocktail = data.drinks[0];
        this.concatenar(this.cocktail);
      }
      );
    }

    concatenar(concatenar:any){
      this.ingredients='';
      
      if(concatenar.strIngredient1!=null  ){
        this.ingredients=this.ingredients+concatenar.strIngredient1;
      }
      if(concatenar.strIngredient2!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient2;
      }
      if(concatenar.strIngredient3!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient3;
      }
      if(concatenar.strIngredient4!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient4;
      }
      if(concatenar.strIngredient5!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient5;
      }
      if(concatenar.strIngredient6!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient6;
      }
      if(concatenar.strIngredient7!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient7;
      }
      if(concatenar.strIngredient8!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient8;
      }
      if(concatenar.strIngredient9!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient9;
      }
      if(concatenar.strIngredient10!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient10;
      }
      if(concatenar.strIngredient11!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient11;
      }
      if(concatenar.strIngredient12!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient12;
      }
      if(concatenar.strIngredient13!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient13;
      }
      if(concatenar.strIngredient14!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient14;
      }
      if(concatenar.strIngredient15!=null){
        this.ingredients=this.ingredients+', '+concatenar.strIngredient15;
      }
      
      
      return this.ingredients;
      
      }

}
