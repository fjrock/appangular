import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MonedasService } from '../../../../services/monedas.service'

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.scss']
})
export class MonedasComponent implements OnInit {

  constructor(
              private monedasService: MonedasService,
              private router: Router) { }

  monedas :any

  ngOnInit() {

    this.monedasService.getMonedas()
    .subscribe(
      (data) => { // Success
        this.monedas = data;
      },
      (error) => {
        console.error(error);
      }
    );

  }

  public getMonedasById(id: any) {
    this.router.navigate([`detalle/${id}`]);
  }

}
