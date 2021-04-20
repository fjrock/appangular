import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/shared/guard/login.guard';
import { PageNotFoundComponent} from '../../shared/page-not-found/page-not-found/page-not-found.component'
import { AdminComponent } from '../admin/components/admin/admin.component'

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    component: AdminComponent
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
export class AdminRoutingModule { }