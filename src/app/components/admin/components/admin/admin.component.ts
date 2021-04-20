import { Component, OnDestroy, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
  })
  export class AdminComponent implements OnInit, OnDestroy{

    ngOnInit() {
    }

    constructor(private loginService:LoginService){}
  
    ngOnDestroy() {
      this.loginService.logout();
    }
  }