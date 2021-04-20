import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CocktailComponent } from  './components/cocktail/cocktail.component'
import { CocktailRoutingModule } from './cocktail-routing.module'
import { CocktailDetalleRandomComponent } from './components/cocktail-detalle-random/cocktail-detalle-random.component'
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CocktailComponent,
    CocktailDetalleRandomComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CocktailRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class CocktailModule { }