import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { DiversaoComponent } from './diversao/diversao.component';
import { HomeComponent } from './home/home.component';
import { OfertaComponent } from './oferta/oferta.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TopoComponent } from './topo/topo.component';
// import { registerLocaleData } from '@angular/common';
// import localeBr from '@angular/common/locales/pt';
// registerLocaleData(localeBr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RodapeComponent,
    TopoComponent,
    RestauranteComponent,
    DiversaoComponent,
    OfertaComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpModule, RouterModule.forRoot(ROUTES)],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
