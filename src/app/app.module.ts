import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RootAppComponentComponent } from './components/root-app-component/root-app-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    RootAppComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
