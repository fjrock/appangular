import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found/page-not-found.component'
import { ArtistComponent } from './components/artist/artist.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistComponent
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
export class MusicRoutingModule { }