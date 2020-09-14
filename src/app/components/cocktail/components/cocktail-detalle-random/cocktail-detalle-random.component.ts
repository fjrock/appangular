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

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get("id");
    this.getCocktailById(id);
  }

  public getCocktailById(id: any){
    this.cocktailService.findDetailCocktail(id).pipe(take(1)).subscribe(
      data=>{
        this.cocktail = data.drinks[0];
      }
      );
    }

}
