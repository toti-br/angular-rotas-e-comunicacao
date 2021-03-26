import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaCepComponent } from './pesquisa-cep/pesquisa-cep.component';
import { ResultadosCepComponent } from './resultados-cep/resultados-cep.component';
import { HomeComponent } from './home/home.component';
import { ResultadosComponent } from './resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaCepComponent,
    ResultadosCepComponent,
    HomeComponent,
    ResultadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
