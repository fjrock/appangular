import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MonedasComponent } from './monedas/monedas.component'
import { MonedasRoutingModule } from './monedas-routing.module';
import { MonedasDetalleComponent } from './monedas-detalle/monedas-detalle.component';



@NgModule({
  declarations: [
    MonedasComponent,
    MonedasDetalleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MonedasRoutingModule,
    FormsModule
  ]
})
export class MonedasModule { }