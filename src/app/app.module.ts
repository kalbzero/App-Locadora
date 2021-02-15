import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { NgxCurrencyModule } from "ngx-currency";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmesComponent } from './pages/filmes/filmes.component';
import { FormComponent } from './pages/filmes/form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    FormsModule,
    NgxCurrencyModule,
    ReactiveFormsModule,
    ToastModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
