import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent} from './/components/cocktail/cocktail.component'
import { CocktailDetalleRandomComponent } from './components/cocktail-detalle-random/cocktail-detalle-random.component'
import { CocktailLetraComponent} from './components/cocktail-letra/cocktail-letra.component'
import { PageNotFoundComponent} from '../page-not-found/page-not-found/page-not-found.component'

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
    path: 'detalle-letra/:letter',
    component: CocktailLetraComponent
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