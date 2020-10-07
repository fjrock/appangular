import { Component, OnDestroy, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
  export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(private formBuilder: FormBuilder, 
                private router: Router,
                private loginService:LoginService) 
    {
      this.createForm();
    }
  
    ngOnInit() {
    }
  
    login(form: any) {

      if (this.form.valid) {
        this.loginService.login(form)
        .then(res => {
            this.router.navigate(['/admin']);
        })
        .catch(error => {
            this.router.navigate(['/home']);
        });
      }
    }
  
    private createForm(): void {

      this.form = this.formBuilder.group({
        email: ['', Validators.compose([
          Validators.required, Validators.email])
        ],
        password: ['', [Validators.required]],
      });
    }

  }