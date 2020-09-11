import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeriadosComponent } from './components/feriados/feriados.component'
import { FeriadosRoutingModule } from './feriados-routing.module'



@NgModule({
  declarations: [
    FeriadosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeriadosRoutingModule,
    FormsModule
  ],
  exports: [
    FeriadosComponent
  ],
  providers: [
   
  ]
})
export class FeriadosModule { }