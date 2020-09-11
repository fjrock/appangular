import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SismosComponent} from './components/sismos/sismos.component'


const routes: Routes = [
  {
    path: '',
    component: SismosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SismosRoutingModule { }