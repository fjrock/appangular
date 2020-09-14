import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../../../services/cocktail.service'
import { Drink } from '../../../../models/drink'
import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cocktail-detalle-letra',
  templateUrl: './cocktail-letra.component.html',
  styleUrls: ['./cocktail-letra.component.scss']
})
export class CocktailLetraComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private cocktailService: CocktailService) { }

  cocktail: Drink[]

  ngOnInit() {
    let letter: string = this.route.snapshot.paramMap.get("letter");
    this.getCocktailByLetter(letter);
  }



  public getCocktailByLetter(letter: any){
   
    console.log(letter);
    this.cocktailService.findByLetter(letter).pipe(take(1)).subscribe(
      data=>{
        this.cocktail = data.drinks;
        console.log(this.cocktail)
      }
      );
    
    }


}
