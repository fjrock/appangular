import { Component, OnInit } from '@angular/core';
import {TiempoService } from '../../services/tiempo.service'

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.scss']
})
export class TiempoComponent implements OnInit {

  constructor(private tiempoService: TiempoService) {}

  tiempo: any;

  ngOnInit() {

    this.tiempoService.getTiempo()
    .subscribe(
      (data) => { // Success
        this.tiempo = data;
        
      },
      (error) => {
        console.error(error);
      }
    );

  }

  

}
