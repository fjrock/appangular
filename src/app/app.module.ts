import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CocktailModule} from './components/cocktail/cocktail.module';
import { MaterialModule } from './components/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment} from '../environments/environment'
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginModule } from './components/login/login.module';
import { AdminModule } from './components/admin/admin.module';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptorService } from './interceptors/header-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    CocktailModule,
    LoginModule,
    AdminModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    

  ],
  providers: [AngularFirestore,
    {provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorService,
      multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
