import { Component, OnInit } from '@angular/core';
import { FeriadosService} from '../../../../services/feriados.service'

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.component.html',
  styleUrls: ['./feriados.component.scss']
})
export class FeriadosComponent implements OnInit {

  constructor(private feriadosService: FeriadosService) { }

  feriados: any

  ngOnInit() {

    this.feriadosService.getFeriados()
    .subscribe(
      (data) => { // Success
        this.feriados = data;
        
      },
      (error) => {
        console.error(error);
      }
    );

  }

}
