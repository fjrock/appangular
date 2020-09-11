import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonedasComponent} from './monedas/monedas.component'
import { MonedasDetalleComponent} from './monedas-detalle/monedas-detalle.component'


const routes: Routes = [
  {
    path: '',
    component: MonedasComponent
  },
  {
    path: 'detalle/:id',
    component: MonedasDetalleComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonedasRoutingModule { }