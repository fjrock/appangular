import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonedasService} from '../../../../services/monedas.service'

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas-detalle.component.html',
  styleUrls: ['./monedas-detalle.component.scss']
})
export class MonedasDetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute,private monedasService : MonedasService) { }

moneda: any


  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get("id");
    this.getMonedasById(id)
  }

  public getMonedasById(id: any){
    
  this.monedasService.getMonedasById(id).subscribe(
       (data) => { 
         this.moneda = data;
    
       },
       (error) => {
        
       }
     );
  
      }

}
