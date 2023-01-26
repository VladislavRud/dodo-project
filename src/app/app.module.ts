import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RootAppComponentComponent } from './components/root-app-component/root-app-component.component';
import { ItemMainComponent } from './components/item-main/item-main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalBasketComponent } from './components/modal-basket/modal-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    RootAppComponentComponent,
    ItemMainComponent,
    FooterComponent,
    ModalBasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
