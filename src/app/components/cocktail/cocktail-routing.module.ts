import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent} from './/components/cocktail/cocktail.component'
import { CocktailDetalleRandomComponent } from './components/cocktail-detalle-random/cocktail-detalle-random.component'
import { PageNotFoundComponent} from '../../shared/page-not-found/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: '',
    component: CocktailComponent
  },
  {
    path: 'detalle/:id',
    component: CocktailDetalleRandomComponent
  },
  {
    path: '**',
    component:PageNotFoundComponent
    
  }  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }