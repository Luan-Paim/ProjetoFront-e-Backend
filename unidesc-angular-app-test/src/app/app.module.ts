import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelularesAddComponent } from './celulares-add/celulares-add.component';
import { HttpClientModule } from '@angular/common/http';
import { CelularListComponent } from './celular-list/celular-list.component';
import { CelularUpdateComponent } from './celular-update/celular-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CelularesAddComponent,
    CelularListComponent,
    CelularUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
