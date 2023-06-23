import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponentComponent} from './components/nav-component/nav-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RootAppComponentComponent} from './components/root-app-component/root-app-component.component';
import {ItemMainComponent} from './components/item-main/item-main.component';
import {FooterComponent} from './components/footer/footer.component';
import {ModalBasketComponent} from './components/modal-basket/modal-basket.component';
import {PizzaComponent} from './components/pizza/pizza.component';
import {DrinkComponent} from './components/drink/drink.component';
import {SnacksComponent} from './components/snacks/snacks.component';
import {AuthRegComponent} from './components/auth-reg/auth-reg.component';
import {RouterModule, Routes} from "@angular/router";
import { AuthModalRegComponent } from './components/auth-modal-reg/auth-modal-reg.component';

const appRoutes: Routes = [
  {path: "home", component: RootAppComponentComponent},
  {path: "auth", component: AuthRegComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    RootAppComponentComponent,
    ItemMainComponent,
    FooterComponent,
    ModalBasketComponent,
    PizzaComponent,
    DrinkComponent,
    SnacksComponent,
    AuthRegComponent,
    AuthModalRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
