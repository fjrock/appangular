import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundModule } from './components/page-not-found/page-not-found.module';
import { CocktailModule} from './components/cocktail/cocktail.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    PageNotFoundModule,
    CocktailModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
