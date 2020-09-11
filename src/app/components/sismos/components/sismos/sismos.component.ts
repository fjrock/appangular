import { Component, OnInit } from '@angular/core';
import {SismosService } from '../../../../services/sismos.service'

@Component({
  selector: 'app-sismos',
  templateUrl: './sismos.component.html',
  styleUrls: ['./sismos.component.scss']
})
export class SismosComponent implements OnInit {

  constructor(private sismosService: SismosService ) { }

  sismos: any

  ngOnInit() {

    this.sismosService.getSismos()
    .subscribe(
      (data) => { // Success
        this.sismos = data;
        
      },
      (error) => {
        console.error(error);
      }
    );

  }

}
