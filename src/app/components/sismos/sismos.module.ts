
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SismosComponent } from './components/sismos/sismos.component'
import { SismosRoutingModule } from './sismos-routing.module'



@NgModule({
  declarations: [
    SismosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SismosRoutingModule,
    FormsModule
  ],
  exports: [
    SismosComponent
  ],
  providers: [
   
  ]
})
export class SismosModule { }