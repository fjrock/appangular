import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent} from './/header/header.component'
import { FooterComponent} from './/footer/footer.component'
import { MaterialModule} from '../../app/components/material/material.module'
import { PageNotFoundComponent} from '../shared/page-not-found/page-not-found/page-not-found.component'


@NgModule({
  declarations: [ 
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[ 
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent]
})
export class SharedModule { }
