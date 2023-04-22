import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { IndexModule } from './pages/index/index.module';

import { CompAtributosComponent } from './comp-atributos/comp-atributos.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CompAtributosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IndexModule,
    PortfolioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
