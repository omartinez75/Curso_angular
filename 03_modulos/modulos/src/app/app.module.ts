// Modulos de angular utilizados
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// Otros modulos
import {SharedModule} from './shared/shared.module';

// Componentes del modulo shared
import { PieComponent } from './shared/pie/pie.component';
import { CabezaComponent } from './shared/cabeza/cabeza.component';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    CabezaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
