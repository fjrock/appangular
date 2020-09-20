import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { MusicRoutingModule } from './music-routing.module';
import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  declarations: [
    ArtistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MaterialModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }