import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent} from './components/page-not-found/page-not-found/page-not-found.component'


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'feriados',
        loadChildren: () => import('./components/feriados/feriados.module').then(m => m.FeriadosModule)
      },
      {
        path: 'monedas',
        loadChildren: () => import('./components/monedas/components/monedas.module').then(m => m.MonedasModule)
      },
      {
        path: 'sismos',
        loadChildren: () => import('./components/sismos/sismos.module').then(m => m.SismosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }