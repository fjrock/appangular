import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent} from './/header/header.component'
import { FooterComponent} from './/footer/footer.component'
import { MaterialModule} from '../../app/components/material/material.module'



@NgModule({
  declarations: [ 
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[ 
    HeaderComponent,
    FooterComponent]
})
export class SharedModule { }
